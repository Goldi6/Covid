const covidModule = require("covid_db_module");



async function addFunctions(config) {
 
    const sql = new covidModule.sqlRequest(config);
    await sql.setPoolConnection();

     //=========ADD FUNCS=================

     console.log('---ADDING FUNCTIONS...')
     const funcs = covidModule.funcs;
   
     for (let func of funcs) {
       await sql.poolRequest(func);
     }
   
   console.log('---FUNCTIONS ADDED!');
}

module.exports = addFunctions;