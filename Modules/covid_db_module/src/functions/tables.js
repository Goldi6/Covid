 

const query = `CREATE FUNCTION GetColumnNamesForTable (@tableName NVARCHAR(128))
RETURNS TABLE
AS
RETURN (
    SELECT COLUMN_NAME
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME = @tableName
);`;




module.exports = []