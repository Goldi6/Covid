const covidModule = require("covid_db_module");
const config = require("../config");

const addStoredProcedures = async () => {
  const sql = new covidModule.sqlRequest(config);
  await sql.setPoolConnection();

  await sql.poolRequest(covidModule.sp_Queries.updateVaccinated.createQuery);
  await sql.poolRequest(covidModule.sp_Queries.getTestsByAgeGroup.createQuery);
};

module.exports = addStoredProcedures;
