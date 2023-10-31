//Independent
function getBackDateFromDate(daysBack, fromDate) {
  const lastDate = new Date(fromDate);
  lastDate.setDate(lastDate.getDate() - daysBack);

  const date = lastDate.toISOString().split("T")[0];

  return date + "T00:00:00.000Z";
}

//search array of dates

function binarySearchByDate_inArray(datesArr, targetDate, startFromIndex = 0) {
  let left = startFromIndex;
  let right = datesArr.length - 1;

  targetDate = targetDate + "";

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const dataDate = datesArr[mid].toISOString();

    if (dataDate === targetDate) {
      return mid; // Found the target date at index mid
    } else if (dataDate < targetDate) {
      left = mid + 1; // Continue searching on the right half
    } else {
      right = mid - 1; // Continue searching on the left half
    }
  }

  return -1; // Target date not found in the array
}

//search arrayOfObjects by dateField

function binarySearchByDate_inArrayOfObjects(
  arrayOfObjects,
  targetDate,
  dateFieldName,
  startFromIndex = 0
) {
  let left = startFromIndex;
  let right = arrayOfObjects.length - 1;

  targetDate = targetDate + "";

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const dataDate = arrayOfObjects[mid][dateFieldName].toISOString();

    if (dataDate === targetDate) {
      return mid; // Found the target date at index mid
    } else if (dataDate < targetDate) {
      left = mid + 1; // Continue searching on the right half
    } else {
      right = mid - 1; // Continue searching on the left half
    }
  }

  return -1; // Target date not found in the array
}

module.exports = {
  getBackDateFromDate,
  binarySearchByDate_inArray,
  binarySearchByDate_inArrayOfObjects,
};
