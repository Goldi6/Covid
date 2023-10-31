const sql = require("mssql");

class sqlRequest {
  constructor(config) {
    this.config = config;
    this.pool = null;
  }
  _createSqlConnection = async () => {
    try {
      var pool = new sql.ConnectionPool(this.config);
      await pool.connect();
      console.info("Connected to the database!");
      return pool;
    } catch (err) {
      console.error("ERROR CONNECTING TO THE DATABASE:", err);
      return null;
    }
  };

  async setPoolConnection() {
    try {
      this.pool = new sql.ConnectionPool(this.config);
      await this.pool.connect();
      console.info("Connection pool is ready! use: sqlname.poolRequest(query)");
    } catch (error) {
      console.error("ERROR CONNECTING TO THE DATABASE:", error);
      console.warn(
        "CHECK REQUEST CONFIGURATION AND VERIFY YOUR DATABASE IS UP!"
      );
      this.pool = null;
    }
  }

  closePool() {
    this.pool.close();
    this.pool = null;

    console.log("Connection Closed");
  }

  async poolRequest(query) {
    if (this.pool == null)
      throw new Error(
        "Setup POOL CONNECTION to use this function; (sqlName.setPoolConnection(config))"
      );

    try {
      const request = this.pool.request();
      console.group();
      console.log("START QUERY...");
      console.log("...");

      console.log("...");
      console.groupEnd();
      const result = await request.query(query);
      console.dir("Query Succeeded!");
      return result;
    } catch (err) {
      console.log("Query failed!");
      const duplicateCodes = [2627, 2714, 1913];
      if (duplicateCodes.includes(err.number)) {
        console.log("-----Duplicate value/already created-----");
      } else {
        console.log(err);
      }
      return err;
    }
  }

  // *** type procParam = {

  //   Name: string;
  //   Value: string | int | date;
  //   type: sql.NVarChar | sql.Int;
  // }

  async poolExecution(procName, procParams = []) {
    console.log("Start Execution of: " + procName);
    console.log("params: " + procParams);
    if (this.pool == null)
      throw new Error(
        "Setup POOL CONNECTION to use this function; (sqlName.setPoolConnection(config))"
      );

    try {
      const request = this.pool.request();


      await request.execute(procName).then(() => {
        console.log(`Finished executing ${procName}`);
      });
    } catch (error) {
      console.log("Stored Procedure Execution failed!");
      console.log(error);
      return false;
    }
  }

  async _sqlRequest(query) {
    const pool = await this._createSqlConnection();
    if (pool == null)
      throw new Error(
        "CHECK REQUEST CONFIGURATION AND VERIFY YOUR DATABASE IS UP!"
      );
    try {
      const request = pool.request();
      console.log("START QUERY...");
      console.log("...");
      console.log(query);

      console.log("...");
      const result = await request.query(query);
      console.dir(result);
      console.dir("Query Succeeded!");
      pool.close();
      return { success: true, data: result };
    } catch (err) {
      console.log("Query failed!");
      console.dir(err);
      pool.close();

      return { success: false };
    }
  }
}

module.exports = sqlRequest;
