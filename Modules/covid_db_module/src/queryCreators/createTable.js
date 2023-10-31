exports.createTableQuery = (tblInfo) => {
  const fields = tblInfo.fields.map((f) => f.id + " " + f.type);

  const query = `IF OBJECT_ID(N'dbo.${tblInfo.tableName}', N'U') IS NULL 
  
  Begin
    create table ${tblInfo.tableName} (${fields.join(",")})
    
    End
    `;

  return query;
};
