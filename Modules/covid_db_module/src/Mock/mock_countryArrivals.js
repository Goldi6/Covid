

// Insert mock data into tblCountryArrivals for each CountryId from tblCountryCodes
const createQuery=(date) => `


INSERT INTO tblCountryArrivals (CountryCode, Date, Arrivals, PositiveResidents, PositiveForeigners)
SELECT
    CountryCode,
    '${date}' AS Date, 
    (FLOOR(RAND(CHECKSUM(NEWID())) * 100) + PositiveResidents + PositiveForeigners) AS Arrivals, 
    PositiveResidents,
    PositiveForeigners
FROM (
    SELECT
        CountryId AS CountryCode,
        FLOOR(RAND(CHECKSUM(NEWID())) * 300) AS PositiveResidents, 
        FLOOR(RAND(CHECKSUM(NEWID())) * 200) AS PositiveForeigners 
    FROM tblDestinationCountries
) AS SubqueryAlias;

`




function insertMockData_init(){
    const queryArr = [];
    const dates = getDatesFromToday(400);
    dates.forEach((date)=>{
        


        queryArr.push(createQuery(date))
    })
    return queryArr.reverse();
}


function insertMockDataUpdate(lastDateInTable){
    const queryArr = [];
    const dates = getDatesFromSpecifiedDate(lastDateInTable);
    dates.forEach((date)=>{

        queryArr.push(createQuery(date))

    })

    return queryArr;

}

function formatDateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }


function getDatesFromSpecifiedDate(startDate) {
    const today = new Date();
    const dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= today) {
      dates.push(formatDateToString(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  

  

function getDatesFromToday(amountOfDays) {
    const today = new Date();
    const dates = [];
  
    for (let i = 0; i < amountOfDays; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(formatDateToString(date));
    }
  
    return dates;
  }
  


  module.exports = {insertMockData_init,insertMockDataUpdate}