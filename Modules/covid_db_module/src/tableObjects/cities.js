const tableName = 'tblCities';

const fields = [
    {id:'Id' , type:'int primary key IDENTITY(1,1)'},
    {id:'Name' , type:'nvarchar(50) unique'},
    {id:'Population',type:'int'}

]


module.exports ={tableName,fields}