class Redis {
  constructor() {
    const Redis = require("ioredis");
    this.redis = new Redis();
    this.validSetNames = ["covidCases", "covidSections"];
  }
  async bulkInsert(caseDataList) {
    // Update Redis in bulk
    if (caseDataList.length > 0) {
      const pipeline = this.redis.pipeline();
      caseDataList.forEach(({ key, value }) => {
        pipeline.set(key, value);
      });
      await pipeline.exec();
      console.log("Bulk update to Redis completed.");
    }
  }

  async _initOrderedSet(setName, dataArr) {
    if (!this.validSetNames.includes(setName)) {
      throw new Error("Invalid set name.");
    }

    // Delete old ordered set
    await this.redis.del(setName);

    const addPromises = dataArr.map((dataObj) => {
      this.redis.zadd(setName, dataObj.order, JSON.stringify(dataObj));
    });
    await Promise.all(addPromises);

    console.log(`${setName} initialized/updated in Redis Ordered Set.`);
  }

  async initSections(sections) {
    await this._initOrderedSet("covidSections", sections);
  }

  async _setHash(hashKey, data) {
    // Delete old hash
    await this.redis.del(hashKey);

    const jsonFuncs = require("../../utils").jsonFuncs;

    const json = jsonFuncs.stringifyObjectFields(data);

    this.redis.hmset(hashKey, json);

    console.log(`Hash initialized/updated in Redis for ${hashKey}.`);
  }

  async initCases(cases) {
    //LOOP OVER CASES

    cases.forEach((caseObj) => {
      this._setHash(caseObj.hashKey, caseObj.data);
    });
  }

  //////////////////////////////!SECTION
  //////////////////////////////!SECTION
  //////////////////////////////!SECTION
  //////////////////////////////!SECTION
  //////////////////////////////!SECTION
  //////////////////////////////!SECTION
  //////////////////////////////!SECTION

  async getOrderedSet(setName) {
    if (!this.validSetNames.includes(setName)) {
      throw new Error("Invalid set name.");
    }

    const elements = await this.redis.zrange(setName, 0, -1);
    return elements.map((element) => JSON.parse(element));
  }





  ////////////-----------------------
  async getHash(hashName) {
   
    const hashData = await this.redis.hgetall(hashName);
    const parsedData = {};
    try {
      for (const key in hashData) {
     
        parsedData[key] = JSON.parse(hashData[key]);
      }

      return parsedData;
    } catch (err) {

      console.log(err);
    }
   
  }




  async getSections() {
    return await this.getOrderedSet("covidSections");
  }
  async getCase(caseKey) {
    return this.getHash(caseKey);
  }
}

module.exports = new Redis();
