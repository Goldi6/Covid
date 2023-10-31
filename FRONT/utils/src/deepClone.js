function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    // If obj is a Date object, create a new Date object with the same timestamp.
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    const cloneArr = [];
    for (let i = 0; i < obj.length; i++) {
      cloneArr[i] = deepClone(obj[i]);
    }
    return cloneArr;
  }

  const cloneObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }

  return cloneObj;
}

module.exports = deepClone;
