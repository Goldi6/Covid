const activeCases = require("../tableObjects/activeCases").tableName;
const people = require("../tableObjects/people").tableName;

const deleteTriggerOnPersonRecovery = async (sql) => {
  const schema = "dbo";
  const triggerName = `tr_insertRecoveryDateTo_${people}`;

  const query = `
 
    CREATE TRIGGER ${schema + "." + triggerName}
        ON ${activeCases}
        AFTER  DELETE
        AS
        BEGIN
        UPDATE ${people} SET LastRecoveryDate = GETDATE() WHERE Id IN (SELECT PersonId FROM deleted)

            
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

module.exports = deleteTriggerOnPersonRecovery;