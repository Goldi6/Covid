const tableName = "tblHospitalsOccupance";


const fields = [               

{id:'Id', type:'int primary key identity(1,1)'},
{id:'Name', type:'nvarchar(50) unique'},
{id:'Beds_occupation', type:'int'},
{id:'Internal_dept_beds_occupation', type:'int'},


 ];


 module.exports = { fields, tableName };