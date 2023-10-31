const sqlRequest = require("../Requests/sql");

const createDB = async (config) => {
  const dbName = config.database;

  const query = `
    IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${config.database}')
    BEGIN
      CREATE DATABASE [${config.database}]
      END
    `;

  config.database = "master";

  const sql = new sqlRequest(config);
  await sql._sqlRequest(query);
  config.database = dbName;
};
module.exports = createDB;
