const mssql = require("mssql/msnodesqlv8");
require("dotenv").config();

const config = {
  server: "DUONGVU",
  user: "sa",
  password: "123",
  database: "CAPProject",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: false,
  },
};

const connect = new mssql.connect(config, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = connect;
