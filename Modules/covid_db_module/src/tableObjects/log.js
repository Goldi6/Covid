const tableName = "tblLog";

const fields = [
  { id: "Id", type: "int primary key IDENTITY(1,1)" },
  { id: "LogDateTime", type: "datetime default(CURRENT_TIMESTAMP)" },
  { id: "logMessage", type: "varchar(MAX)" },
];

module.exports = { fields, tableName };
