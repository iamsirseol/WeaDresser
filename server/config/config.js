const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
<<<<<<< HEAD
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
=======
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || 'weadresser',
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
<<<<<<< HEAD
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
=======
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || 'weadresser',
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
<<<<<<< HEAD
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD,
    //logging: true,
    database: process.env.DATABASE_NAME || "weadresser",
=======
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME || 'weadresser',
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
