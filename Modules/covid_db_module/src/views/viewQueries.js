function createViewObj(name, query) {
  return {
    name,
    query: `CREATE VIEW ${name} AS 
    ${query}`,
  };
}





const views = [
  {
    name:'dailyPositiveCases_view',
    query:`    WITH DailyCounts AS (
      SELECT
          CAST(DateTime AS DATE) AS Date,
          COUNT(*) AS Positives
      FROM tblTests
      WHERE isPositive = 1
      GROUP BY CAST(DateTime AS DATE)
  )

  SELECT
      Date,
      Positives,
      AVG(Positives) OVER (ORDER BY Date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS Seven_Day_Moving_Average
  FROM DailyCounts`
  },
  {
    name:'testedByAge_view',
    query:`SELECT
    CAST(DateTime AS DATE) AS [DATE],
    SUM(CASE WHEN age >= 0 AND age <= 9 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_0_9,
    SUM(CASE WHEN age >= 0 AND age <= 9 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_0_9,
      SUM(CASE WHEN age >= 10 AND age <= 19 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_10_19,
    SUM(CASE WHEN age >= 10 AND age <= 19 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_10_19,
    SUM(CASE WHEN age >= 20 AND age <= 29 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_20_29,
    SUM(CASE WHEN age >= 20 AND age <= 29 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_20_29,
      SUM(CASE WHEN age >= 30 AND age <= 39 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_30_39,
    SUM(CASE WHEN age >= 30 AND age <= 39 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_30_39,
      SUM(CASE WHEN age >= 40 AND age <= 49 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_40_49,
    SUM(CASE WHEN age >= 40 AND age <= 49 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_40_49,
      SUM(CASE WHEN age >= 50 AND age <= 59 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_50_59,
    SUM(CASE WHEN age >= 50 AND age <= 59 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_50_59,
      SUM(CASE WHEN age >= 60 AND age <= 69 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_60_69,
    SUM(CASE WHEN age >= 60 AND age <= 69 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_60_69,
      SUM(CASE WHEN age >= 70 AND age <= 79 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_70_79,
    SUM(CASE WHEN age >= 70 AND age <= 79 AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_70_79,
      SUM(CASE WHEN age >= 80 AND isPositive = 1 THEN 1 ELSE 0 END) AS positive_80,
    SUM(CASE WHEN age >= 80  AND isPositive = 0 THEN 1 ELSE 0 END) AS negative_80
FROM tblTests
GROUP BY CAST(DateTime AS DATE);`
  },
  {
    name: "ramzor_view",
    query: `
    WITH 
    todaysResult AS (
        SELECT * FROM dbo.getTestsCountWithCity_ByDate(CAST(GETDATE() AS DATE))
    ),
    previousResult AS (
        SELECT * FROM dbo.getTestsCountWithCity_ByDate(CAST(GETDATE()-7 AS DATE))
    ),
    activeCases AS (
        SELECT city, [count] FROM dbo.CountActiveCasesByCity()
    )
SELECT
    activeCases.city,
    dbo.calculateDailyScore(
        todaysResult.population,
        todaysResult.positive_count,
        ISNULL(activeCases.[count], 0)
    ) AS daily_score,
    dbo.CalcPer10000People(todaysResult.positive_count, todaysResult.population) AS per10000,
    dbo.calcPercent(todaysResult.population, todaysResult.positive_count) AS positives_percent,
    dbo.calcPercentDiff(previousResult.positive_count, todaysResult.positive_count) AS percent_difference,
    ISNULL(activeCases.[count], 0) AS active_cases
FROM
    activeCases
FULL OUTER JOIN
    previousResult ON activeCases.city = previousResult.city
 FULL OUTER  JOIN
    todaysResult ON todaysResult.city = activeCases.city;
    `,
  },
  {
    name: "CountryArrivals_view",
    query: `SELECT tblDestinationCountries.CountryName as country, tblCountryStatusCode.Color as color ,tblCountryArrivals.Date as date, 
    tblCountryArrivals.Arrivals as arrivals,tblCountryArrivals.PositiveResidents as positive_residents ,
    tblCountryArrivals.PositiveForeigners as positive_foreigners 
    
    FROM tblCountryArrivals 
    JOIN tblDestinationCountries ON tblCountryArrivals.CountryCode = tblDestinationCountries.CountryId 
    JOIN tblCountryStatusCode ON tblDestinationCountries.CountryStatusId = tblCountryStatusCode.CountryStatusId
 `,
  },
  {
    name: "SevereCases_view",
    query: `SELECT Hospitalized AS hospitalized,SevereCases as critical,on_ECMO = 0,Ventilated as ventilated,ModerateCases as moderate,MildCases as mild
    FROM tblHospitalized
    WHERE id=(SELECT Max(id) from tblHospitalized)`,
  },
  {
    name: "Hospitalizations_view",
    query: `SELECT [Date],MildCases AS Mild,ModerateCases AS Moderate, SevereCases + Ventilated AS Severe 
    FROM tblHospitalized`,
  },
  { // NOTE: hard coded in vaccinations table - no 'vaccinated' table
    name: "Vaccinated_view",
    query: `SELECT DoseName AS name , [Count] As data
    FROM tblVaccinated`,
  },
  {
    name: "HospitalOccupation_view",
    query:
      "SELECT Name AS hospital, Internal_dept_beds_occupation AS internal, Beds_occupation AS general FROM tblHospitalsOccupance",
  },
  {
    name: "new_cases_yesterday_view",
    query: `SELECT 
    SUM(CASE WHEN CAST(DateTime AS DATE) = CAST(GETDATE() - 1 AS DATE) THEN 1 ELSE 0 END) AS yesterday,
    SUM(CASE WHEN CAST(DateTime AS DATE) = CAST(GETDATE() AS DATE) THEN 1 ELSE 0 END) AS since_midnight,
    COUNT(*) AS total
FROM tblTests
WHERE isPositive = 1;`,
  },
  {
    name: "active_cases_view",
    query: `SELECT  COUNT(*) AS active_cases, SUM( CASE WHEN isHospitalized = 1 THEN 1 ELSE 0 END) AS hospitalized from tblActiveCases`,
  },
  { //NOTE : hard coded - no deaths table
    name: "cumulative_deaths_view",
    query: "SELECT cumulative_deaths=12615",
  },
  {
    name: "positive_yesterday_view",
    query:
      `SELECT  
      ISNULL(COUNT(*),0) AS total_tests_yest, 
      ISNULL(SUM(CASE WHEN isDetection = 1 AND isPositive = 1 THEN 1 ELSE 0 END),0) as tested_positive_yest_reveal,
      CAST(dbo.calcPercent(COUNT(*), SUM(CASE WHEN isPositive = 1 THEN 1 ELSE 0 END)) AS varchar(20))+'%' AS tested_positive_yest_percent
  FROM tblTests
  WHERE CAST(DateTime as DATE) = CAST(GETDATE()-1 as DATE);`,
  },
  {
    name: "confirmed_cases_7_days_view",
    query: `SELECT
    SUM(CASE WHEN isPositive = 1 AND CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END) AS confirmed_cases,
    CAST(dbo.calcPercentDiff(
        SUM(CASE WHEN isPositive = 1 AND CAST(DateTime AS DATE) < CAST(GETDATE() - 7 AS DATE) AND CAST(DateTime AS DATE) >= CAST(GETDATE() - 14 AS DATE) THEN 1 ELSE 0 END),
        SUM(CASE WHEN isPositive = 1 AND CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END)
    ) as varchar(20))+'%' AS prior_7_days
FROM tblTests;`,
  },
  {//NOTE hard coded - severe cases are from a table that gets data from an API which is not updated
    name: "severe_cases_7_days_view",
    query: "SELECT severe_cases= 34, prior_7_days='+54.5%' ",
  },
  {//NOTE: hard coded - no deaths table
    name: "deaths_7_days_view",
    query: "SELECT deaths= 9, prior_7_days='0%' ",
  },
  {
    name: "tests_7_days_view",
    query:
      `SELECT
      SUM(CASE WHEN CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END) AS tests,
      CAST(dbo.calcPercentDiff(
          SUM(CASE WHEN  CAST(DateTime AS DATE) < CAST(GETDATE() - 7 AS DATE) 
            AND CAST(DateTime AS DATE) >= CAST(GETDATE() - 14 AS DATE) THEN 1 ELSE 0 END),
          SUM(CASE WHEN  CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END)
      ) as varchar(20))+'%' AS prior_7_days,
      CAST( 
      dbo.calcPercent(SUM(CASE WHEN CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END) 
      , SUM(CASE WHEN isPositive = 1 AND CAST(DateTime AS DATE) >= CAST(GETDATE() - 7 AS DATE) THEN 1 ELSE 0 END))
      
      AS varchar(20) )+ '%' AS positive_results
  FROM tblTests;`,
  },
];

module.exports = views.map((view) => createViewObj(view.name, view.query));
