const mongoDatabase = require("./db/Database");

async function main() {
  await mongoDatabase.conn();
  const cases = await mongoDatabase.getCases();
  console.log(cases);
}

main();
