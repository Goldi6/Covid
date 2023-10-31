const getAPIData = require("./src/Requests/axiosRequest");
const sqlRequest = require("./src/Requests/sql");
const isOutDated = require("./src/checker/tableIsOutdated");
const runTableUpdate_byAPI = require("./src/tableUpdate/tableUpdate");
const createTableForAPI = require("./src/createTables/createTable_byAPI");
const createTable = require("./src/createTables/createTable");
const createDB = require("./src/createDB/create");

const sp_Queries = require("./src/tableObjects/procedures/index");
const calcFuncs = require('./src/functions/calc');
const tableFuncs = require('./src/functions/tableRelatedFunctions');
const funcs = [...tableFuncs,...calcFuncs];
//////!SECTION data

const triggers = require("./src/triggers");

const addDESCIndex = require("./src/indexes/addDESC_DateIndex");
const createView = require("./src/views/CREATE_View");
const viewsQueries = require("./src/views/viewQueries");

const mockDataQueries = require("./src/Mock");

const data = require("./src/tableObjects/index");
// const data = { hospitalized, vaccinated, logTable,hospitals };

const ix_Queries = { addDESCIndex };


const covidProjectModule = {
  getAPIData,
  sqlRequest,
  data,
  isOutDated,
  runTableInsertRows_byAPI: runTableUpdate_byAPI,
  createTableForAPI,
  createTable,
  createDB,

  triggers,
  sp_Queries,
  ix_Queries,
  viewsQueries,
  createView,
  mockDataQueries,
  funcs
};

module.exports = covidProjectModule;
