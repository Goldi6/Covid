const {faker} = require("@faker-js/faker");

function randRow() {
  const now = new Date();
  const fromDate = new Date().setDate(now.getDate() - 7);
  const randomDate = faker.date.between({ from: fromDate, to: now });


// convert date object to SQL date string
  const dateStr = randomDate.toISOString().split('T')[0];




  const rand = {
    date: dateStr,
    type: faker.number.int({ min: 1, max: 2 }),
    detection: faker.number.binary(),
    positive: faker.number.binary(),
    age: faker.number.int({ min: 1, max: 99 }),
    vaccineGroup: faker.number.int({ min: 1, max: 5 }),
    personId: faker.number.int({ min: 1, max: 1000 }),
  };

  return `(CAST('${rand.date}' as DATE) , ${rand.type}, ${rand.detection}, ${rand.positive}, ${rand.age}, ${rand.vaccineGroup}, NULL,${rand.personId},NULL )`;
}

function generateQueries() {


  const base = (
    rows
  ) => ` INSERT INTO tblTests (DateTime, Type, isDetection, isPositive, age, vaccinationGroup, LocationId, PersonId, PassportId)
    VALUES ${rows}`;

  const rows = ()=>Array(100).fill('')
    .map(() => randRow());

    return Array(5).fill('').map(()=>base(rows().join(",")));

}

module.exports = generateQueries;
