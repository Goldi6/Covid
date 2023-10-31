function TableCreationQuery(tableName, translatedFields) {
  const columnDefinitions = translatedFields.map(({ id, type }) => {
    return `${id} ${type}`;
  });

  const createTableQuery = `CREATE TABLE ${tableName} (${columnDefinitions.join(
    ", "
  )});`;
  return createTableQuery;
}

function generate_TableCreationQuery(tableName, translatedFields) {
  const generatedQuery = TableCreationQuery(tableName, translatedFields);

  const query = `IF OBJECT_ID(N'dbo.${tableName}', N'U') IS NULL 
  Begin
  ${generatedQuery}
  End`;

  return query;
}

module.exports = generate_TableCreationQuery;
