class Database {
  constructor() {


    //////Connect Knex
    const DBuser = process.env.SQL_USERNAME;
    const DBpass = process.env.SQL_PASSWORD;
    const DBserver = process.env.SQL_SERVER;
    const DBname = process.env.SQL_DB;
    const DBclient = process.env.SQL_CLIENT;
    const DBport = process.env.SQL_PORT;
    const development = {
      client: DBclient,
      connection: {
        host: DBserver,
        user: DBuser,
        password: DBpass,
        database: DBname,
        port: parseInt(DBport),
        // options: {
        //   encrypt: true, // For encrypted connection, if needed
        // },
      },
    };

    this.knex = require("knex")(development);
  }



  async fetchDataFromTimeBasedProc(procName) {

    const days = {all:0,oneMo:30,threeMo:90,sixMo:180,oneYr:365};
    
    const results = {};
   for(const n in days){

      const query = this.knex.raw(`exec.${procName} ${days[n]}`);

      const result = await query;

      results[n] = result;
    }


    return results;

  }

  async fetchData(viewName) {
    try {


      const data = await this.knex.select().from(viewName);
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${viewName}:`, error);
      throw error;
    }
  }

  async getCountsByDateRangeKnex(
    viewName,
    fieldsToCount,
    fieldsToSelect,
    fieldsToGroupBy
  ) {
    // Define the date ranges (in days) for your graph/table filters
    const dateRanges = {
      oneMo: 30,
      threeMo: 90,
      sixMo: 180,
      oneYr: 365, 
      all: 0, // 0 days for all data
    };

    // Create an object to store the counts for each date range
    const counts = {};

    // Loop through each date range and execute queries
    for (const [rangeName, days] of Object.entries(dateRanges)) {
      let dateFilter =
        rangeName === "All"
          ? ""
          : `WHERE date >= CAST('${calculateDateBack(days)}' as DATE)`;
      let groupBy =
        fieldsToGroupBy.length > 0
          ? `GROUP BY ${fieldsToGroupBy.map((field) => `${field}`).join(", ")}`
          : "";
      //-----
      let toCountSelect =
        fieldsToCount.length > 0
          ? fieldsToCount.map((field) => `SUM(${field}) as ${field}`).join(", ")
          : null;
      let toSelect =
        fieldsToSelect.length > 0
          ? fieldsToSelect.map((field) => `${field}`).join(", ")
          : null;

      let select = "";
      if (toCountSelect && toSelect) select = toCountSelect + "," + toSelect;
      else if (toCountSelect) select = toCountSelect;
      else if (toSelect) select = toSelect;
      else select = " * ";
      //---
      const query = this.knex.raw(`
          SELECT
           ${select}
          FROM
            ${viewName}
            ${dateFilter}
        ${groupBy}
        `);

      const result = await query;

      // Store the counts in the counts object
      counts[rangeName] = result;
    }

    return counts;
  }
}

function calculateDateBack(days) {
  const currentDate = new Date();
  const pastDate = new Date(currentDate);

  // Subtract the specified number of days
  pastDate.setDate(currentDate.getDate() - days);

  // Format the date as "YYYY-MM-DD"
  const year = pastDate.getFullYear();
  const month = String(pastDate.getMonth() + 1).padStart(2, "0");
  const day = String(pastDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

module.exports = new Database();
