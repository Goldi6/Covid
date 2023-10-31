const DBuser = process.env.SQL_USERNAME;
const DBpass = process.env.SQL_PASSWORD;
const DBserver = process.env.SQL_SERVER;
const DBname = process.env.SQL_DB;

const config = {
  user: DBuser,
  password: DBpass,
  server: DBserver,
  database: DBname,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    // enableArithAbort: true, // Add this line to enable logging
  },
};

module.exports = config;
