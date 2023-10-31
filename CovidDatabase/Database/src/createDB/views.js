const covidModule = require("covid_db_module");
const config = require("../config");

const getView = (viewName) => {
  return `
  SELECT COLUMN_NAME
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = '${viewName}';
  
  `;
};

module.exports = async () => {
  const sql = new covidModule.sqlRequest(config);
  await sql.setPoolConnection();

  const viewsQueries = covidModule.viewsQueries;

  for (const view of viewsQueries) {
    await covidModule.createView(sql, view.name, view.query);
  }

  sql.closePool();
};
