const express = require("express");
const redis = require("../../../Redis");

const router = express.Router();

const basePath = "/api/covid";

//NOTE : add func to fetch data in fot present in redis

router.use(basePath + "/:section/:case", async (req, res, next) => {
  const caseName = req.params.section + ":" + req.params.case;
  try {
    const caseData = await redis.getCase(caseName);
    //-----------------TIME FILTER
    const time = req.query.time;

    if (time && caseData.filters && caseData?.type === "graph") {

      

      const data = caseData.body.data;

      if(data.series){

        const tFilter = caseData.filters.find((f) => f.name === "time").values;
        const dateAxis = data.xAxis.type === "category" ? "xAxis" : "yAxis";
  
        data[dateAxis].data = [...data[dateAxis].data.slice(tFilter[time])];
  
        data.series = data.series.map((obj) => {
          obj.data = [...obj.data.slice(tFilter[time])];
          return obj;
        });
      }else{

        const selected = {...data[time]};
        caseData.body.data=selected;
      }



    }
    //NOTE: define dataType
    if (time && caseData?.type === "table") {
      caseData.body.data.rows = caseData.body.data.rows[time];
    }
    if (time && caseData?.dataType === "timeMap") {
      const t = caseData.type === "table" ? "rows" : "series";
      caseData.body.data[t] = caseData.body.data[t][time];
    }

    // Get all query parameters as an object
    const queryParams = req.query;

    //find all keys that start with 'check'
    const checkKeys = Object.keys(queryParams).filter((key) =>
      key.startsWith("check")
    );

    checkKeys.forEach((key) => {
      //get the value of the check key
      const checkValue = queryParams[key];

      //get the name of the field to check
      const fieldName = key.split("check_")[1].toLowerCase();

      //filter the data
      const data = caseData.body.data;
      const filterKey = caseData.filters.find((f) => f.name === fieldName).key;

      const dataKey = caseData.type === "graph" ? "series" : "rows";

      data[dataKey] = data[dataKey].filter((obj) => {
        return checkValue.includes(obj[filterKey]);
      });
    });

 
    
    res.send(caseData);
  } catch (error) {
    next(error);
  }

});

//=========================SECTIONS=========================
router.use(basePath + "/sections", async (req, res, next) => {
  const sections = await redis.getSections();
  res.send(sections);
});

module.exports = router;
