module.exports = function groupData(dataArray) {
    const groupedData = {};
  
    for (const data of dataArray) {
      for (const key in data) {
        if (!groupedData[key]) {
          groupedData[key] = [];
        }
        groupedData[key].push(data[key]);
      }
    }
  
    return groupedData;
  };
  