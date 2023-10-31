const mongoUpdate_query = `CREATE PROCEDURE usp_RunNodeScriptForViewWithPath
@ScriptPath NVARCHAR(500),
@ViewName NVARCHAR(100),
@Columns NVARCHAR(MAX),
AS
BEGIN
DECLARE @Command NVARCHAR(MAX)

-- Construct the command to run the Node.js script
SET @Command = 'node "' + @ScriptPath + '" "' + @ViewName + '" ' + @Columns;

-- Execute the Node.js script using xp_cmdshell
EXEC xp_cmdshell @Command;
END
`;
module.exports = mongoUpdate_query;
