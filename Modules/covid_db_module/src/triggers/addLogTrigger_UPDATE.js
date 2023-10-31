const logTable = require("../tableObjects/log");

const addLogUpdateTrigger = async (sql, tableName) => {
  const schema = "dbo";
  const triggerName = `tr_logForUpdate_${tableName}`;

  const query = `
 
    CREATE TRIGGER ${schema + "." + triggerName}
        ON ${tableName}
        AFTER  UPDATE
        AS
        BEGIN
            DECLARE @UpdatedIds NVARCHAR(MAX);
            SELECT @UpdatedIds = COALESCE(@UpdatedIds + ', ', '') + CONVERT(NVARCHAR, id)
            FROM inserted;

            DECLARE @LogMessage NVARCHAR(100);
            SET @LogMessage = 'Updated in ${tableName} IDs: {' + @UpdatedIds + '}';

            INSERT INTO ${logTable.tableName} (logMessage)
            VALUES (@LogMessage);
        END;

    `;
  try {
    result = await sql.poolRequest(query);
    if (result === false) throw new Error("ERROR creating Trigger");
    console.log(`Created Trigger ${triggerName} !`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = addLogUpdateTrigger;
