
const defaultLineCardStyle = (data) => {
  return {
    fontSize: data?.fontSize || "0.75rem",
    mobileMainFontSize: data?.mobileMainFontSize || "1rem",
    mainFontSize: data?.mainFontSize || "1.4rem",
    className: data?.className || "line",
  };
};

module.exports = async function FetchSQL_AndConstruct(mongoCase) {
  //-------get utils
  const stringFuncs = require("../../utils").stringFuncs;

let TO_CACHE = {
  name: stringFuncs.underscoreToSpace(mongoCase.name),
  title:mongoCase.title,

}

//in case of blank card
  if(!mongoCase.content.data){
    return TO_CACHE;
  }


  //else continue creating cache object
  //-------init variables
  const {
   
    tooltip,
    shareable,
    //------------------card content
    content,
  } = mongoCase;

  //-------init cache object

   TO_CACHE = {...TO_CACHE,
    tooltip,
    shareable,
    type: content.type,
    body: {},
  };
  //----used in graphs and tables
  if (mongoCase.defaultApiParams)
    TO_CACHE.defaultApiParams = mongoCase.defaultApiParams;
  if(mongoCase.colorHelpers) TO_CACHE.colorHelpers = mongoCase.colorHelpers;
  if(mongoCase.class) TO_CACHE.class = mongoCase.class;
  //--------

  const dataCont = content.data;
  const contType = content.type;
  const filters =
    "filters" in content && content.filters?.length > 0 ? content.filters : [];

  //-------setting style

  if (content.type === "line")
    TO_CACHE.body.style = defaultLineCardStyle(dataCont);

  //--------------------------------
  //-----------------setting data
  //--------------------------------------
  //-------fetching data AND constructing
  try {
    //--------view data is not grouped or counted by time
    //-------------sql view
    const view = mongoCase.view ? mongoCase.view : null;
    const proc = mongoCase.proc ? mongoCase.proc : null;
    let sqlData = "";
    if (proc) {
      if (filters.find((f) => f.name === "time")) {

        
        const SqlTableData =
          await require("../../knex").fetchDataFromTimeBasedProc(proc);
        sqlData = SqlTableData;

      }
    } else if ("timeGroupingCount" in mongoCase) {
      const fieldsToCount = mongoCase.fieldsToCount
        ? mongoCase.fieldsToCount
        : [];
      const fieldsToSelect = mongoCase.fieldsToSelect
        ? mongoCase.fieldsToSelect
        : [];
      const fieldsToGroupBy = mongoCase.fieldsToGroupBy
        ? mongoCase.fieldsToGroupBy
        : [];
      const SqlTableDataGroups =
        await require("../../knex").getCountsByDateRangeKnex(
          view,
          fieldsToCount,
          fieldsToSelect,
          fieldsToGroupBy
        );

      sqlData = SqlTableDataGroups;
    } else if(view) {
      const SqlTableData = await require("../../knex").fetchData(view);

      if (SqlTableData.length === 0)
        throw new Error("No data fetched from SQL view");
      //---------------------!-!-!-----------constructing data object

      sqlData = SqlTableData;
    }else{
      return TO_CACHE;
    }

    const constructor = require("./construct/cacheObjectConstructor");

    const combinedObj = constructor(
      contType,
      { ...dataCont },
      sqlData,
      filters
    );

    //     //-------setting filters

    if (filters.length > 0) TO_CACHE.filters = { ...combinedObj.filters };

    const bodyData = combinedObj.data;
    TO_CACHE.body.data = bodyData;

    const clone = { ...combinedObj };
    delete clone.data;

    //-------setting data
    TO_CACHE = { ...TO_CACHE, ...clone };

    //-------End of try to fetch and construct
  } catch (err) {
    console.log(err);
  } finally {
    console.log();

    return TO_CACHE;
  }
};
