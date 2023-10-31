

const procName ='getTestCasesAgeGrouped_byDays_sp';

const createQuery = `
CREATE PROCEDURE dbo.getTestCasesAgeGrouped_byDays_sp @days INT = 0
AS
BEGIN
	
	
	DECLARE @fromDate datetime;
	
	IF @days = 0
	BEGIN
	    SELECT @fromDate = MIN(DateTime) FROM tblTests;
	END
	ELSE
	BEGIN
	    SET @fromDate = GETDATE() - @days;
	END

	
    SELECT
        CASE
              WHEN age BETWEEN 0 AND 9 THEN '0-9'
            WHEN age BETWEEN 10 AND 19 THEN '10-19'
            WHEN age BETWEEN 20 AND 29 THEN '20-29'
            WHEN age BETWEEN 30 AND 39 THEN '30-39'
            WHEN age BETWEEN 40 AND 49 THEN '40-49'
            WHEN age BETWEEN 50 AND 59 THEN '50-59'
            WHEN age BETWEEN 60 AND 69 THEN '60-69'
            WHEN age BETWEEN 70 AND 79 THEN '70-79'
            WHEN age BETWEEN 80 AND 89 THEN '80-89'

            ELSE '90+'
        END AS AgeGroup,
        SUM(CASE WHEN isPositive = 1 THEN 0 ELSE 1 END) AS Negative,
        SUM(CASE WHEN isPositive = 1 THEN 1 ELSE 0 END) AS Positive
    FROM tblTests 
        WHERE CAST([DateTime] AS DATE) >= CAST(@fromDate AS DATE) 

    
    GROUP BY
        CASE
            WHEN age BETWEEN 0 AND 9 THEN '0-9'
            WHEN age BETWEEN 10 AND 19 THEN '10-19'
            WHEN age BETWEEN 20 AND 29 THEN '20-29'
            WHEN age BETWEEN 30 AND 39 THEN '30-39'
            WHEN age BETWEEN 40 AND 49 THEN '40-49'
            WHEN age BETWEEN 50 AND 59 THEN '50-59'
            WHEN age BETWEEN 60 AND 69 THEN '60-69'
            WHEN age BETWEEN 70 AND 79 THEN '70-79'
            WHEN age BETWEEN 80 AND 89 THEN '80-89'

            ELSE '90+'
        END
    ORDER BY AgeGroup;
END;
`;


module.exports = { procName, createQuery };