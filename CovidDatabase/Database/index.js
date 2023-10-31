const config = require("./src/config");
const createDatabase = require("./src/createDB/create");
const addStoredProcedures = require("./src/createDB/addProcedures");
const createViews = require("./src/createDB/views");
const addFunctions = require("./src/createDB/functions");



async function createDB(){

  // first function creates the database,adds tables,triggers, and adds some mock data (search for 'NOTE: mock' in the code)
  await createDatabase(config);
  await addFunctions(config);
  await addStoredProcedures(config);
  await createViews(config);
      console.log("DATABASE CREATED!");

}
createDB();


// createDatabase(config)
// .then(addFunctions)
  // .then(addStoredProcedures)
  // .then(createViews)
  // .finally(() => {
  //   console.log("DATABASE CREATED!");
  // });
