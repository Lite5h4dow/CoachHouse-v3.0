require("dotenv").config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    mongodb: process.env.mongodb,
    mongodb_name: process.env.mongodb_name,
    mssql: process.env.mssql,
    local_url: process.env.local_url
  }
};
