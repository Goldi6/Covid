function createProcQuery(procName, query) {
  return `CREATE PROCEDURE dbo.${procName}
    AS
    BEGIN
${query}
END`;
}

module.exports = createProcQuery;
