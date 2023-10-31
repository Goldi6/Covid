const { createTableQuery } = require("../queryCreators/createTable");

const createTable = async (connectedSql, tblInfo) => {
  const query = createTableQuery(tblInfo);

  return await connectedSql.poolRequest(query).then((res) => {
    if (res.success) {
      console.log(`${tblInfo.tableName}: Table created successfully.`);
    } else {
      console.log(`${tblInfo.tableName}: Table creation failed.`);
    }
    return res.success;
  });
};

module.exports = createTable;
