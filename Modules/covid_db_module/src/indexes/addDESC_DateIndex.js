const { createDescIndexQuery } = require("../queryCreators/createIndex");

async function addDESCIndex(connectedSql, tblInfo) {
  //find index column;
  const tableName = tblInfo.tableName;
  const columns = tblInfo.fields;

  const columnsToIndex = columns.filter((col) => col.descIndex);
  console.log(columnsToIndex);

  columnsToIndex.forEach(async (col) => {
    let colName = col.id;
    console.log("GGGGGG");
    console.log(colName);
    console.log(col);
    const query = createDescIndexQuery(tableName, colName);

    await connectedSql.poolRequest(query).then((res) => {
      if (res.success) {
        console.log(`${tableName}: Index on ${colName} created successfully.`);
      } else {
        console.log(`${tableName}: Index on ${colName} failed.`);
      }
      return res.success;
    });
  });
}

module.exports = addDESCIndex;
