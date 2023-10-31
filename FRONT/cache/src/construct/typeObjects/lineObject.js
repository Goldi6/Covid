

function createLineObject(tableData, dataCont){


    let lines = {};
    //---------------------column based data view result
    if (tableData.length == 1) {
      // console.log("column based data view result");
      lines = dataCont.lines.map((line) => {
        if ("name" in line) {line.data = tableData[0][line.name];
        
          line.name = line.name.replace(/_/g, " ");
        }

        return line;
      });
    } else {
      //----------------------row based data view result

      // console.log("row based data view result");
      lines = dataCont.lines.map((line) => {
        line = {
          ...line,
          data: tableData.find((item) => item.name === line.name).data,
        };
        line.name = line.name.replace(/_/g, " ");

        return line;
      });

    }
    return lines;

}






module.exports = createLineObject;