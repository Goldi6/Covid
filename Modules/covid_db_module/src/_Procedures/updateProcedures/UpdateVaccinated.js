//NOTE: this proc uses HARD CODED data as an example, the idea is to Get data from table/resource and update the count.

const createProcQuery = require("../../queryCreators/procedure");
const vaccinatedInfo = require("../../tableObjects/vaccinated");

const query = ` declare @to_first int,  @to_second int, @to_third int,  @to_fourth int, @to_omicron int;
    
set @to_first = 0;
set @to_second = 5; 
set @to_third = 10; 
set @to_fourth = 2; 
set @to_omicron = 3; 
 


UPDATE ${vaccinatedInfo.tableName}
SET
  Count = 
    CASE
      WHEN DoseName = 'first_dose' THEN Count + @to_first
      WHEN DoseName = 'second_dose' THEN Count + @to_second
      WHEN DoseName = 'third_dose' THEN Count + @to_third
      WHEN DoseName = 'fourth_dose' THEN Count + @to_fourth
      WHEN DoseName = 'omicron_dose' THEN Count + @to_omicron
    END,
  LastUpdateDate = CURRENT_TIMESTAMP
WHERE DoseName IN ('first_dose', 'second_dose', 'third_dose', 'fourth_dose', 'omicron_dose');

`;

const UpdateVaccinatedTable_sp_QUERY = createProcQuery(
  vaccinatedInfo.proc.update,
  query
);

module.exports = UpdateVaccinatedTable_sp_QUERY;
