const covidModule = require("covid_db_module");

const createDatabase = async (config) => {
  await covidModule.createDB(config);

  console.log(`---DATABASE ${process.env.SQL_DB} CREATED!`);

  const sql = new covidModule.sqlRequest(config);
  await sql.setPoolConnection();



  //==========================LOG TABLE==========================
  await covidModule.createTable(sql, covidModule.data.log);

  //==========================GENERAL TABLES==========================
  ///////////////////////////////////////////////
  //FIXME: trigger is not working
  /////==================HOSPITALIZED===================
  const HOSPITALIZED = covidModule.data.hospitalized;

  //NOTE: 'Hospitalized' table gets data from government open API, those tables are constructed from the API result in hebrew and a translated to english object.
  //* the available data on the source is outdated *.

  await covidModule.createTableForAPI(sql, HOSPITALIZED);
    await covidModule.triggers.logInsert(sql, HOSPITALIZED.tableName);

    await covidModule.ix_Queries.addDESCIndex(sql, HOSPITALIZED);      
    //? This function adds a desc Index to whichever column that has descIndex field set to true in the table Object. In this case to the dateTime col.

  ///////////////////////////////////!SECTION
  /////========================VACCINATED========================

  const VACCINATED = covidModule.data.vaccinated;
  await covidModule
    .createTable(sql, VACCINATED)
await covidModule.triggers.logInsert(sql, VACCINATED.tableName);
 
await covidModule.triggers.logUpdate(sql, VACCINATED.tableName);
    //setup vaccinated fields
 
      // NOTE: mock
      // NOTE: this action adds currently existing vaccine fields from the real covid website and adds hard coded data for the propose of the example

      let insertGeneralData_query_vaccinated = `insert Into ${VACCINATED.tableName} (DoseName,Count) values ('1st_dose',6723360),('2nd_dose',6160041),('3rd_dose',4513582),('4th_dose',846598),('Omicron_dose',407052)`;

      //? This variant will add the rows with Count = 0
      // let insertGeneralData_query_vaccinated = `insert Into ${vaccinated.tableName} (DoseName,) values ('first_dose'),('second_dose'),('third_dose'),('fourth_dose'),('omicron_dose')`;

      await sql.poolRequest(insertGeneralData_query_vaccinated);
    

  ////================HOSPITALS================

  const HOSPITALS = covidModule.data.hospitals;
  await covidModule.createTable(sql, HOSPITALS).then(() => {
    const sqlData = require("../dataObjects/bedsInHospitals");
    const data = sqlData();

    //NOTE: mock
    const insertQuery = `INSERT INTO ${HOSPITALS.tableName} (Name, Internal_dept_beds_occupation, Beds_occupation) VALUES ${data}`;
     return sql.poolRequest(insertQuery);
  });

  //======================COUNTRY STATUS CODES======================

  const COUNTRY_STATUS_CODES = covidModule.data.countryStatusCode;
  await covidModule.createTable(sql, COUNTRY_STATUS_CODES);

    //NOTE: mock
    const sqlData = require("../dataObjects/countryStatusCodes");
    const data = sqlData();
    const insertQuery = `INSERT INTO ${COUNTRY_STATUS_CODES.tableName} (CountryStatusId,Color) VALUES ${data}`;
    await  sql.poolRequest(insertQuery);


  //=========================DESTINATION COUNTRIES=========================
  const DESTINATION_COUNTRIES = covidModule.data.countries;
  await covidModule.createTable(sql, DESTINATION_COUNTRIES);
    await covidModule.triggers.logInsert(
      sql,
      DESTINATION_COUNTRIES.tableName
    );
 

  //==========================Entered Country==========================

  const enteredCountry = covidModule.data.enteredCountry;
  await covidModule
    .createTable(sql, enteredCountry);
  
      await covidModule.triggers.logInsert(sql, enteredCountry.tableName);
   
      //NOTE: mock
      const queries =covidModule.mockDataQueries.countryArrivals.insertMockData_init();
      for (let query of queries) {
          await sql.poolRequest(query);
      }
   

  //=============================cities==============================
  //has limited amount of cities
  const cities = covidModule.data.cities;
  await covidModule
    .createTable(sql, cities)
    .then(() => {
      return covidModule.triggers.logInsert(sql, cities.tableName);
    })
    .then(async () => {
      //NOTE: mock
      const cityData = require("../dataObjects/israeliCities");
      const queries = cityData.map((s) => {
        return `Insert into ${cities.tableName} (Name , Population) values (N'${s.city}',${s.population})`;
      });
      for (let query of queries) {
        await sql.poolRequest(query);
      }
    });

  //====================PEOPLE in real live will be on a separate DB or server
  const people = covidModule.data.people;
  await covidModule.createTable(sql, people);
  await covidModule.triggers.logInsert(sql, people.tableName)
  //  -- MOCK DATA---------
  //NOTE: mock
    .then(async () => {
      const fs = require("fs");
      const path = require("path");
      const filePath = path.join(__dirname, "../dataObjects/tblPeople.sql");

      const sqlQuery = fs.readFileSync(filePath, "utf8");
         await sql.poolRequest(sqlQuery);
    });

  //=======================TESTS=========================== //* will be on separate DB or server

  const tests = covidModule.data.tests;
  await covidModule.createTable(sql, tests).then(() => {
    return covidModule.triggers.logInsert(sql, tests.tableName);
  }).then(()=>{
    return covidModule.triggers.positiveCaseInsert(sql);
  })
   // -- MOCK DATA---------
   //NOTE: mock
      .then(async ()=>{
        const fs = require('fs');
        const path = require('path');
  const filePath = path.join(__dirname, '../dataObjects/tblTests.sql');
  const filePath1 = path.join(__dirname, '../dataObjects/tblTests_2.sql');
  const filePath2 = path.join(__dirname, '../dataObjects/tblTests_3.sql');

      const sqlQuery = fs.readFileSync(filePath, 'utf8');
      const sqlQuery2 = fs.readFileSync(filePath1, 'utf8');
      const sqlQuery3 = fs.readFileSync(filePath2, 'utf8');
       await sql.poolRequest(sqlQuery);
       await sql.poolRequest(sqlQuery2);
       await sql.poolRequest(sqlQuery3);

      })


  //=======================Active Cases=========================== //* separate DB or server
  const activeCases = covidModule.data.activeCases;
  await covidModule.createTable(sql, activeCases).then(() => {
    return covidModule.triggers.logInsert(sql, activeCases.tableName);
  })
  await covidModule.triggers.recoveryTrigger(sql);


   

  //==========================CLOSE POOL==========================
  sql.closePool();


};

module.exports = createDatabase;
