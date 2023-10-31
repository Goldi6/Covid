const mongoConnString = "mongodb://localhost:27017";
//const dbName_?? = '';
const collection = "";

query = `CREATE PROCEDURE usp_UpdateMongoDocument
    @ViewName NVARCHAR(100),
    @Columns NVARCHAR(MAX),
    @Values NVARCHAR(MAX)
AS
BEGIN
    DECLARE @MongoConnectionString NVARCHAR(500) = '${mongoConnString}';
    DECLARE @MongoDatabase NVARCHAR(100) = 'your-mongodb-database';
    DECLARE @MongoCollection NVARCHAR(100) = '${collection}';

    DECLARE @MongoUpdateCommand NVARCHAR(MAX)

    -- Build the MongoDB update command using dynamic SQL
    SET @MongoUpdateCommand = 'db.' + @MongoCollection + '.updateOne({ ' + @Columns + ' }, { $set: { ' + @Values + ' } })'

    -- Execute the MongoDB update command using xp_cmdshell
    EXEC xp_cmdshell 'mongo ' + @MongoConnectionString + '/' + @MongoDatabase + ' --eval "' + @MongoUpdateCommand + '"'
END`;
