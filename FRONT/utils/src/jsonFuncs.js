function stringifyObjectFields(obj) {
    const newObj = {};
  
    for (const key in obj) {
      newObj[key] = JSON.stringify(obj[key]);
    }
    return newObj;
  }

  module.exports = {stringifyObjectFields};