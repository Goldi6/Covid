const mongoDatabase = require("./db/Database");

mongoDatabase.init()
mongoDatabase.mongoose.disconnect().finally(()=>{
    mongoDatabase.mongoose.disconnect();
});