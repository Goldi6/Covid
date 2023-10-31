
function getDateFilter(datesArr) {

    //NOTE: App Specific date filter
    const daysBackFilter = [365, 180, 90, 30];
  

  const indexes = daysBackFilter.map((daysBack) => datesArr.length - daysBack); 
    return {
       all: 0,
      oneYr: indexes[0],
      sixMo: indexes[1],
      threeMo: indexes[2],
      oneMo: indexes[3],
    };
  }

    module.exports = getDateFilter;