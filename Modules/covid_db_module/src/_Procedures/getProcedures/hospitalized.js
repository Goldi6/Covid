const createProcQuery = require("../../queryCreators/procedure");

const hospitalizedInfo = require("../../tableObjects/hospitalized");

const query = `select Id , Hospitalized , Ventilated ,MildCases,ModerateCases, SevereCases,CumulativeSevereCases 
from ${hospitalizedInfo.tableName};`;

//Where Id = (SELECT MAX(Id) FROM tblHospitalized);

const GetHospitalizedCases_sp_QUERY = createProcQuery(
  hospitalizedInfo.proc.GetCases,
  query
);

module.exports = { GetHospitalizedCases_sp_QUERY };
