const activeCases = require("../tableObjects/activeCases").tableName;
const tests = require("../tableObjects/tests").tableName;

const addInsertTriggerToPositiveTestResult = async (sql) => {
  const schema = "dbo";
  const triggerName = `tr_insertPositiveCaseTo_${activeCases}`;

  const query = `
 
    CREATE TRIGGER ${schema + "." + triggerName}
        ON ${tests}
        AFTER  INSERT
        AS
        BEGIN
            INSERT INTO ${activeCases} (PersonId , activeFromDate) SELECT PersonId,DateTime FROM inserted WHERE isPositive = 1
            
        END;

    `;
  try {
    result = await sql.poolRequest(query);
    if (result === false) throw new Error(`ERROR creating Trigger ${triggerName}`);
    console.log(`Created Trigger ${triggerName} !`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addInsertTriggerToPositiveTestResult;
