const covidModule = require("covid_db_module");
const config = require("./src/config");

async function runUpdate(config) {
  //NOTE: 'Hospitalized' table gets data from government open API, it gets last id from the database, compares to the size of API data, and gets the extra data if exists to the table.
  //* sql request class in 'covidModule' has 2 variants to connect and execute queries,
  //* one is used by functions like the one below, it opens a connection and closes on complete.
  await covidModule.runTableInsertRows_byAPI(config, covidModule.data.hospitalized);
  await covidModule.runTableInsertRows_byAPI(config, covidModule.data.countries);


//TODO: update country status
  //== //* second method opens a pool connection and has 'poolRequest' method that wont close by itself.
  //== // -- this class is mostly created for logs.
  //== //NOTE: 'Vaccinated' table updates with hard coded data, assuming the stored procedure gets data from a resource.
  
  const sql = new covidModule.sqlRequest(config);
  await sql.setPoolConnection();
  await sql.poolExecution(covidModule.sp_Queries.updateVaccinated.procName);
  
const testsMock =covidModule.mockDataQueries.randomTests(); 
const queryPromises = testsMock.map(async (element) => {
  await sql.poolRequest(element);
});

await Promise.all(queryPromises);


return sql;
}
runUpdate(config).then((sql) => {
    sql.closePool();
});
