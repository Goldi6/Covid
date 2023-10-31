const mongoDB = require("../mongoose");
const utils = require("../utils");

const Redis = require("../Redis");


const init = async () => {
  await mongoDB.conn();
  const sections = await mongoDB.getSections();
  Redis.initSections(sections);
  
  let cases = await mongoDB.getCases();
  
  cases.forEach(async (c) => {
    if (!c.view && !c.proc) return c;
    const hashKey =
    utils.stringFuncs.replaceNonAlphaNumericWithUnderscore(c.section) +
    ":" +
    utils.stringFuncs.replaceNonAlphaNumericWithUnderscore(c.name);
  //--------return CARD data
  const fetchAndConstruct = require("./src/FetchSQL_AndConstruct")
    const data= await fetchAndConstruct(c._doc);
    //------hash

    Redis._setHash(hashKey,data);
  });
};




const schedule = require('node-schedule');

const job =()=> schedule.scheduleJob('* 0 * * *', function(){
  init();
});

init();
job();

