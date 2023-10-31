const tableName = 'tblActiveCases';

const fields = [
    {id:'Id',type:'int primary key Identity(1,1)'},
    {id:'PersonId' , type:'int foreign key references tblPeople(Id)'},
    {id:'PersonState' , type:`varchar(20) default null`},
    {id:'IsHospitalized',type:'bit default 0'},
    {id:'HospitalId',type:'int foreign key references tblHospitalsOccupance(Id) default null'},
    {id:'activeFromDate',type:'datetime default getdate()'},
]


module.exports = {tableName,fields}