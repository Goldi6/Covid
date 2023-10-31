const mongoDatabase = require("./db/Database");
mongoDatabase.conn();
mongoDatabase.dropAll().finally(()=>{
    mongoDatabase.mongoose.disconnect();
});
