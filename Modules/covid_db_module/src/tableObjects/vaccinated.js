const tableName = "tblVaccinated";

const fields = [
  { id: "Id", type: "int primary key IDENTITY(1,1)" },
  { id: "DoseName", type: "varchar(20) unique" },
  { id: "Count", type: "int default(0)" },
  { id: "StartDate", type: "datetime" },
  { id: "LastUpdateDate", type: "datetime default(CURRENT_TIMESTAMP)" },
];

module.exports = { fields, tableName };
