

const fields=[
    {id:'CountryStatusId', type:'int primary key'},
    {id:'CountryStatusName' , type:'nvarchar(50)'},
    {id:'Color' , type:'nvarchar(20)'},
    {id:'Description' , type:'nvarchar(150)'},
   


]


module.exports = {fields, tableName:'tblCountryStatusCode'}