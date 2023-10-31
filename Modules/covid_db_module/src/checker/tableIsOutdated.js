const getAPIData = require("../Requests/axiosRequest");
const sqlRequest = require("../Requests/sql");

async function isOutDated(sql_config, tblInfo) {
  const query_getLastIdFromTable = async (sql, tableName) => {
    const query = `SELECT Max(Id) as LastId from ${tableName};`;

    return await sql._sqlRequest(query).then((data) => {
      var lastId = data.data.recordset[0]["LastId"];
      console.log("Last ID in SQL server:", lastId);
      return lastId;
    });
  };

  const totalFromApi = await getAPIData(tblInfo.resource_id, { limit: 1 }).then(
    (data) => {
      console.log("total records on source", data.total);
      return data.total;
    }
  );

  const sql = new sqlRequest(sql_config);
  var lastIdInTable = await query_getLastIdFromTable(sql, tblInfo.tableName);
  if (lastIdInTable === null) {
    return 0;
  } else if (lastIdInTable !== totalFromApi) {
    console.log(`-- Data in ${tblInfo.tableName} is Outdated!`);
    return lastIdInTable;
  } else {
    console.log(`-- Data in ${tblInfo.tableName} is up to Date!`);

    return null;
  }
}

module.exports = isOutDated;
