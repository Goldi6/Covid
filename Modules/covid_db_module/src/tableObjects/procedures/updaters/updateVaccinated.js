//NOTE: this proc uses HARD CODED data as an example, the idea is to Get data from table/resource and update the count.

const createProcQuery = require("../../../queryCreators/procedure");
const vaccinatedInfo = require("../../vaccinated");

const procName = "UpdateVaccinatedTable_sp";
const query = `
DECLARE @to_first AS INT = 0
DECLARE @to_second AS INT = 2
DECLARE @to_third AS INT = 3
DECLARE @to_fourth AS INT = 4
DECLARE @to_omicron AS INT = 5
 


UPDATE ${vaccinatedInfo.tableName}
SET
        [Count] = CASE
            WHEN DoseName = 'first_dose' THEN [Count] + @to_first
            WHEN DoseName = 'second_dose' THEN [Count] + @to_second
            WHEN DoseName = 'third_dose' THEN [Count] + @to_third
            WHEN DoseName = 'fourth_dose' THEN [Count] + @to_fourth
            WHEN DoseName = 'omicron_dose' THEN [Count] + @to_omicron
        END,
        LastUpdateDate = CURRENT_TIMESTAMP
    WHERE DoseName IN ('first_dose', 'second_dose', 'third_dose', 'fourth_dose', 'omicron_dose')
`;

const createQuery = createProcQuery(procName, query);

module.exports = { procName, createQuery };
