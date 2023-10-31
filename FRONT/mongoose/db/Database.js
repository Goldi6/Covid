
class Database {
  constructor() {
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const server = process.env.MONGO_SERVER;
    const db = process.env.MONGO_DB;

    this.connectionURI = `mongodb://${username}:${password}@${server}/${db}?authSource=admin`;
    this.mongoose = require("mongoose");
    this.Section = require("../schema").Section;
    this.Case = require("../schema").Case;

    this._defaultData = require("../readyObjects_BAK");


     // Initialize the Mongoose connection and add event listeners
     this.mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to MongoDB");
    });

    this.mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });

    this.mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from MongoDB");
    });
  }

  async conn() {
    try {
      console.log("try conn....")
      await this.mongoose.connect(this.connectionURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('conn status: ',this.mongoose.connection.readyState)
      //console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }



 
  

  async getSections() {
    try {
      const sections = await this.Section.find()
        .select({ _id: 0, __v: 0 })
        .populate({
          path: "cases",
          select: "name defaultApiParams order -_id",
        })
        .populate({
          path: "subGroupCases",
          select: "name defaultApiParams -_id",
        })
        .sort({ order: 1 })
        .exec();

      //sort sections by order field
      sections.sort((a, b) => {
        return a.order - b.order;
      });
      return sections;
    } catch (error) {
      console.error("Error fetching sections:", error);
      throw error;
    }
  }

  async getCases() {
    try {
      const cases = await this.Case.find()
        .select({ _id: 0, __v: 0 })
        .sort({ order: 1 })
        .exec();
      return cases;
    } catch (error) {
      console.error("Error fetching cases:", error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error("Error disconnecting from MongoDB:", error);
      throw error;
    }
  }
  async dropAll(){

    this.Case.collection.drop()
    this.Section.collection.drop()



  }
  async init() {
    try {
      await this.conn();

      await this.initDefaultDatabase();
    } catch (error) {
      console.log(error);
    }
  }
  async initDefaultDatabase() {
    try {
      console.log("Initializing default database...");
  
      console.log("Inserting default sections...");
      const ins_sections = await this.insertDefaultSections();
      //console.log("Default sections inserted:", ins_sections);
  
      console.log("Inserting default cases...");
      const ins_cases = await this.insertDefaultCases(ins_sections);
     // console.log("Default cases inserted:", ins_cases);
  
      console.log("Database initialization completed.");
      return { sections: ins_sections, cases: ins_cases };
    } catch (error) {
      console.error("Database initialization error:", error);
      return { error: "Database initialization failed." };
    }
  }

  async insertDefaultCases() {
    const secs = this._defaultData.cases.map((section) => {
      return new this.Case(section);
    });

    try {
      const res = await this.Case.insertMany(secs);
      return res;
    } catch (e) {
      this.handleErrors(e);
    }

   
  }
  handleErrors(e) {
    switch (e.code) {
      case 11000:
        console.log("Duplicate insert");
        break;
      default:
        throw e;
    }
  }
  async insertDefaultSections() {
    const secs = this._defaultData.sections.map((section) => {
      return new this.Section(section);
    });

    try {
      const res = await this.Section.insertMany(secs);
      return res;
    } catch (e) {
      console.log(e)
      this.handleErrors(e);
    }
  }
}

module.exports = new Database();


