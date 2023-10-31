const resource_id = "486e0319-e667-4904-b930-7d6d892496ca";


const tableName = "tblDestinationCountries";


const fields = [
    {id:'Id', type:'int primary key '},
    {id:'CountryId' , type:'int', required:true, unique:true},
    {id:'CountryName' , type:'nvarchar(50)', required:true},
    //{id:'CountryNameEn' , type:'nvarchar(50)'},
    {id:'CountryStatusId' , type:'int', required:true},
    {id:'LastUpdate' , type:'datetime', required:true},
    {id:`CONSTRAINT FK_DestinationCountries_CountryStatusCode` ,type:`FOREIGN KEY (CountryStatusId)
    REFERENCES dbo.tblCountryStatusCode (CountryStatusId)`}

]

const translationMap={
    _id:'Id',
    id:'CountryId',
    destination:'CountryName',
    country_status_id:'CountryStatusId',
    update_date:'LastUpdate',
}


module.exports = {

    fields,
    tableName,
    resource_id,translationMap
}