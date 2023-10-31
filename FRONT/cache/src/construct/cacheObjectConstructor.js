const utils = require("../../../utils");

const constructCacheObject = (type, dataCont, tableData, filters) => {
  //--------------init object
  const object = {};
  //-------create object based on card type

  switch (type) {
    //---------------------------------Info card
    case "line":
      const createLineObject = require("./typeObjects/lineObject");
      let lines = createLineObject(tableData, dataCont);

      object.data = lines;

      break;
    //--------------------------------Graph card
    case "graph":
      //-----------------------------------------------creating graph

      //----color indicators for the graph
      const createColorHelpers = require("./colorHelper");

      const colorHelpers = createColorHelpers(dataCont.graph.series);
      object.colorHelpers = colorHelpers;

      //----constructing graph [styling and data as one object]

      const createGraph = require("./typeObjects/graph");

      const isTimeDivided = 'all' in tableData;

      let graphOBJ = "";
      if (isTimeDivided) {

        const timedGraphs = {};
        Object.keys(tableData).forEach((key) => {
          timedGraphs[key] = createGraph(dataCont.graph, tableData[key]);
        });
  
     
        
        graphOBJ = timedGraphs;
      } else {
        const graph = createGraph(dataCont.graph, tableData);
        graphOBJ = graph;

        //--------------------------------------------creating time filter

        const timeFil = filters.find((f) => f.name === "time");
        if (timeFil) {
          const createDateFilter = require("../funcs/createDateFilter");

          const mainAxis = graph.xAxis.type === "category" ? "xAxis" : "yAxis";

          const timeFilter = createDateFilter(graph[mainAxis].data);

          timeFil.values = timeFilter;
        }

        //--------------------------------------------setting fieldCheck filter
        const checkField = filters.find((f) => f.type === "check");
        if (checkField) {
          checkField.values = graph.series.map((s) => s.name);
        }
      }
      object.filters = [...filters];

      //-----adding graph to return object
      object.data = graphOBJ;

      break;
    //--------------------------------Table card

    case "table":
      object.data = {};
      object.data.rows = tableData;

      object.data.labels = dataCont.table.labels;

      //-------setting Check filter
      const checkFilter = filters.find((f) => f.type === "check");
      if (checkFilter) {
        const Key = checkFilter.key;
        const Tdata = Array.isArray(tableData) ? tableData : tableData.oneMo;
        checkFilter.values = Tdata.map((row) => row[Key]);
      }



      
      //----spread filters
      object.filters = [...filters];
      break;
  }

  return utils.deepClone(object);
};


module.exports = constructCacheObject;

