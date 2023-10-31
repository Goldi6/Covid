const countTests = `CREATE FUNCTION dbo.getTestsCountWithCity_ByDate(@date DATE)
RETURNS TABLE
RETURN
(
    SELECT
        tblCities.Id,
        tblCities.Name AS city,
        tblCities.Population AS population,
        @date AS [date],
        COALESCE(SUM(CASE WHEN tblTests.isPositive = 1 THEN 1 ELSE 0 END), 0) AS positive_count,
        COALESCE(SUM(CASE WHEN tblTests.isPositive = 0 THEN 1 ELSE 0 END), 0) AS negative_count
    FROM
        tblCities
    LEFT JOIN
        tblPeople ON tblPeople.CityId = tblCities.Id
    LEFT JOIN
        tblTests ON tblTests.PersonId = tblPeople.Id AND CAST(tblTests.[DateTime] AS DATE) = @date
    GROUP BY
        tblCities.Id,
        tblCities.Name,
        tblCities.Population
);`;

const countActiveCases = `
create function dbo.CountActiveCasesByCity()
returns Table
AS RETURN
(
 SELECT
        tblCities.Name AS city,
       	COUNT(tblActiveCases.Id) as [count]
    FROM
        tblActiveCases
    JOIN
        tblPeople ON tblActiveCases.PersonId = tblPeople.Id
    JOIN
        tblCities ON tblPeople.CityId = tblCities.Id
   
    GROUP BY
        tblCities.Name
)
`;

module.exports = [countTests,countActiveCases];
