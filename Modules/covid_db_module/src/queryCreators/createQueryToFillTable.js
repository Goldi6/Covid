const { values } = require("../views/viewQueries");
const getTranslatedQuery = require("./createTranslatedColumns");

function getSqlQuery_insert_byAPI(
  dataRecords,
  tableName,
  translationMap = undefined
) {
  //the queries will be split to smaller chunks to prevent max query size limit
  const queries = [];

  if (dataRecords.records) dataRecords = dataRecords.records;
  if (translationMap) {
    console.log(" Applying translation map....:");
    // Apply the translationMap to transform the API data fields and insert to out database

    const cols = getTranslatedQuery.getColumnsForQuery(
      translationMap,
      dataRecords[0]
    );

    const valuesArray = [];

    for (let i = 0; i < dataRecords.length; i++) {
      const rowData = dataRecords[i];
      const rowValues = getTranslatedQuery.getValuesForQuery(
        translationMap,
        rowData
      );

      valuesArray.push(`(${rowValues})`);
    }

    valuesArray.forEach((value) => {
      const query = `insert into ${tableName} (${cols}) values ${value}`;
      queries.push(query);
    });

    console.log("QUERY CREATED!");
    return queries;
  }
}

module.exports = getSqlQuery_insert_byAPI;
