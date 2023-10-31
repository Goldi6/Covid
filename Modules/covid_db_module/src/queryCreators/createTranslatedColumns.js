const getColumnsForQuery = (hebrewToEnglishMap, dataRow) => {
  const columnArray = [];

  for (let key in dataRow) {
    if (hebrewToEnglishMap[key]) columnArray.push(hebrewToEnglishMap[key]);
  }

  return columnArray.join(",");
};

const getValuesForQuery = (translationMap, dataRow) => {
  const valuesArray = [];
  for (let key in translationMap) {
    let val = convertToValue(dataRow[key]);
    valuesArray.push(val);
  }
  return valuesArray.join(",");
};

function formatDateForSqlServer(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `CAST(\'${year}-${month}-${day}\' as date)`;
  //  return `CAST(\'${year}-${month}-${day} ${hours}:${minutes}:${seconds}\' as datetime)`;
}

function convertToValue(value) {
  if (value === "NULL" || value === null) {
    return 0;
  } else if (value === "<15") {
    return Math.floor(Math.random() * 15) + 1;
    //return "NULL";
  } else if (isDateTime(value)) {
    //return `CAST (${value}) AS DATETIME`;
    return formatDateForSqlServer(new Date(value));
  } else if (!isNaN(value)) {
    const parsedValue = parseFloat(value);
    return Number.isInteger(parsedValue) ? parseInt(parsedValue) : parsedValue;
  }else if(typeof value === 'string'){
    return `N'${value}'`;
  } 
  else {
    console.log("NAN", value);
  }
}

const isDateTime = function (value) {
  const datetimePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
  return datetimePattern.test(value);
};
module.exports = { getColumnsForQuery, getValuesForQuery };
