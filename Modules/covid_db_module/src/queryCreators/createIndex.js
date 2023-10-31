function createDescIndexQuery(tableName, columnName) {
  const indexName = `IX_${columnName}Column_Desc`;

  return `CREATE NONCLUSTERED INDEX ${indexName}
    ON ${tableName} (${columnName} DESC);
    `;
}

module.exports = { createDescIndexQuery };
