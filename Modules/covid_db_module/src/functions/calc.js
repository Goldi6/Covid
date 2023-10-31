const calcPercent = `CREATE FUNCTION dbo.calcPercent (@total INT, @num INT)
RETURNS INT
AS
BEGIN
    DECLARE @percent INT
    IF @total = 0
        SET @percent = 0
    ELSE
        SET @percent = ROUND((CAST(@num AS FLOAT) / CAST(@total AS FLOAT)) * 100, 0)
    RETURN @percent
END


`;

const percentDiff = `
CREATE FUNCTION dbo.calcPercentDiff (@prev INT, @new INT)
RETURNS INT
AS
BEGIN
    DECLARE @percent INT
    IF @prev = 0
        SET @percent = 0
    ELSE
        SET @percent = ROUND(((CAST(@new AS FLOAT) - CAST(@prev AS FLOAT)) / CAST(@prev AS FLOAT)) * 100, 0)
    RETURN @percent
END

`;

const per10000 = `CREATE FUNCTION dbo.CalcPer10000People(@PositiveCount INT, @Population INT)
RETURNS DECIMAL(18, 2)
AS
BEGIN
    DECLARE @PositivesPer10000 DECIMAL(18, 2);

    IF @Population = 0
        SET @PositivesPer10000 = 0.0;
    ELSE
        SET @PositivesPer10000 = CAST(@PositiveCount AS DECIMAL(18, 2)) / CAST(@Population AS DECIMAL(18, 2)) * 10000.0;

    RETURN @PositivesPer10000;
END;`;

const dailyScore = `CREATE FUNCTION dbo.calculateDailyScore (
    @population INT,
    @covidPositives INT,
    @sickPeople INT
)
RETURNS FLOAT
AS
BEGIN
    DECLARE @dailyScore FLOAT;

    -- Calculate a weighted score based on population, covid positives, and sick people, with given weight of 0.5 each
    SET @dailyScore = (1.0 * @covidPositives / @population) * 5.0 + (1.0 * @sickPeople / @population) * 5.0;

    -- Ensure the score is between 1.0 and 10.0
    IF @dailyScore < 1.0
        SET @dailyScore = 1.0;
    ELSE IF @dailyScore > 10.0
        SET @dailyScore = 10.0;

    RETURN @dailyScore;
END;`;

module.exports = [per10000, percentDiff, calcPercent,dailyScore];
