const utils = require("../../../../utils");
const deepClone = utils.deepClone;

const defaultGraphStyle = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
 
    },
  },

  grid: {
    left: "10%",
    right: "5%",
    top: "5%",
    bottom: "20%",
    containLabel: true,
  },
  axisStyle: {
    nameLocation: "middle",
    nameGap: 35,
    nameTextStyle: {
      fontSize: 14,
    },
  },
};

//--------------------createGraph--------------------
//--------------------createGraph--------------------
//--------------------createGraph--------------------

function createGraph(OriginGraph, tableData) {
  const graph = deepClone(OriginGraph);
  console.info("Creating Graph");
  //-----------grouping data
  let grouped = utils.groupGraphData(tableData);
  //-------------setting xAxis and yAxis
  const mainAxis = graph.xAxis.type === "category" ? "xAxis" : "yAxis";
  const valueAxis = mainAxis === "xAxis" ? "yAxis" : "xAxis";


  graph[mainAxis].data = [...grouped[graph[mainAxis].name]];
  graph[mainAxis] = { ...graph[mainAxis], ...defaultGraphStyle.axisStyle };
  graph[valueAxis] = { ...graph[valueAxis], ...defaultGraphStyle.axisStyle };

  //----------------inserting data to series
  const legend = [];
  graph.series = graph.series.map((s) => {
   

    legend.push(s.name);
    s.data = [...grouped[s.name]];
    return s;
  });

  const ModifiedGraph = {
    legend,
    tooltip: defaultGraphStyle.tooltip,
    grid: defaultGraphStyle.grid,
    ...graph,
  };




  return ModifiedGraph;
}








module.exports = createGraph;

