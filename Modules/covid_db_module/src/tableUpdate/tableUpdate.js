const isOutDated = require("../checker/tableIsOutdated");
const getAPIData = require("../Requests/axiosRequest");
const getSqlQuery_insert_byAPI = require("../queryCreators/createQueryToFillTable");
const sqlRequest = require("../Requests/sql");

async function runTableUpdate_byAPI(config, tblInfo) {
  await isOutDated(config, tblInfo)
    .then((lastTableId) => {
      if (lastTableId === null) {
        throw new Error(
          `-- -- *  No need to update ${tblInfo.tableName}!  * -- --`
        );
      } else {
        return getAPIData(tblInfo.resource_id, {
          offset: lastTableId,
          limit: 10000,
        });
      }
    })
    .then(async (data) => {
      let queries = getSqlQuery_insert_byAPI(
        data.records,
        tblInfo.tableName,
        tblInfo.translationMap
      );
      console.log(`Updating Table ${tblInfo.tableName}...!`);
      const sql = new sqlRequest(config);
      await sql.setPoolConnection();
      console.log(
        `-- -- * Running chunk Update for ${tblInfo.tableName} * -- --`
      );

      for (let query of queries) {
        console.log(query);
        console.log("...");

        await sql.poolRequest(query);
      }

      console.log(`-- -- * Done Update for ${tblInfo.tableName} * -- --`);
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      console.log("   ");
      console.log(`END OF UPDATE PROCESS for ${tblInfo.tableName}`);
      console.log(" ---------------------------------  ");
    });
}

module.exports = runTableUpdate_byAPI;
