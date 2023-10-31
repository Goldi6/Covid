const mongoose = require("mongoose");


const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const server = process.env.MONGO_SERVER;
const db = process.env.MONGO_DB;

// Replace with your MongoDB connection string
const uri = `mongodb://${username}:${password}@${server}`;

// Name of the new database to create
const dbName = db;

async function createDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    // Create a Mongoose model to perform a save operation
    const NewDatabaseModel = mongoose.model("NewDatabase", new mongoose.Schema({}));

    // Create a new instance of the model
    const newDatabase = new NewDatabaseModel();

    // Save the instance to create the new database
    await newDatabase.save();

    console.log(`Database "${dbName}" created successfully.`);
  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
}

createDatabase();