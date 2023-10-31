const tableName = 'tblPeople';


const fields = [
    {id:'Id' ,type:'int primary Key IDENTITY(1,1)'},
    {id:'Birthday' , type:'date'},
    {id:'Gender',type:'varchar(20)'},
    {id:'CityId',type:'int'},
    {id:'VaccinationGroup',type:'int'},
    // {id:'lastVaccinationDate',type:'date default NULL'}, // -- goes to vaccination table
    // {id:'nextVaccineDate',type:'date default NULL'},
    // {id:'vaccineIsPastDate',type:'bit default false'}, /// goes to vaccination table
    {id:'LastRecoveryDate',type:'date default NULL'},
]


module.exports = {fields,tableName}