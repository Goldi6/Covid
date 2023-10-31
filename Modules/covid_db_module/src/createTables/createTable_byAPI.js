const Generate_TableCreationQuery = require("../queryCreators/createTableByAPItables");
const sqlRequest = require("../Requests/sql");

async function tableForAPI(connectedSql, tblInfo) {
  /////////////////
  // HOSPITALIZED table
  console.log(`Creating creation Query for ${tblInfo.tableName}...`);
  const query = Generate_TableCreationQuery(tblInfo.tableName, tblInfo.fields);

  return await connectedSql.poolRequest(query).then((res) => {
    if (res.success) {
      console.log(`${tblInfo.tableName}: Table created successfully.`);
    } else {
      console.log(`${tblInfo.tableName}: Table creation failed.`);
    }
    return res.success;
  });

  ////////////////
}

module.exports = tableForAPI;
