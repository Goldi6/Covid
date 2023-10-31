const logTable = require("../tableObjects/log");

const addLogInsertTrigger = async (sql, tableName) => {
  const schema = "dbo";
  const triggerName = `tr_logForInsert_${tableName}`;

  const query = `
 
    CREATE TRIGGER ${schema + "." + triggerName}
        ON ${tableName}
        AFTER  INSERT
        AS
        BEGIN
            DECLARE @InsertedIds NVARCHAR(MAX);
            SELECT @InsertedIds = COALESCE(@InsertedIds + ', ', '') + CONVERT(NVARCHAR, Id)
            FROM inserted;

            DECLARE @LogMessage NVARCHAR(100);
            SET @LogMessage = 'Inserted into ${tableName} IDs: {' + @InsertedIds + '}';

            INSERT INTO ${logTable.tableName} (logMessage)
            VALUES (@LogMessage);
        END;

    `;
  try {
    result = await sql.poolRequest(query);
    if (result === false) throw new Error("ERROR creating Trigger");
    console.log(`Created Trigger ${triggerName} !`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addLogInsertTrigger;
