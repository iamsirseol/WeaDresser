const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
