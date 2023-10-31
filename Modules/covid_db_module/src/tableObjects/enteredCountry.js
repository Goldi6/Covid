

const tableName = 'tblCountryArrivals'

const fields = [    


{id:"Id" , type:"int primary key IDENTITY(1,1)"},
{id:'CountryCode', type:'int'},
{id:'Date', type:'date'},
{id:'Arrivals', type:'int'},
{id:'PositiveResidents', type:'int'},
{id:'PositiveForeigners', type:'int'},
{id:'INDEX idx_CountryArrivals_Date', type:'(Date)'},
{id:'CONSTRAINT UC_CountryCode_Date' ,type:'UNIQUE (CountryCode, Date)'}
 

]


module.exports={fields,tableName}


