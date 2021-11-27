require("dotenv").config();
const express = require('express')
const app = express()
const cors = require("cors");
const https = require('https');
// const cookieParser = require("cookie-parser");
const port = process.env.HTTP_PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"],
  })
);
// const credentials ; // "여기에 AWS 키"
sequelize.sync({ force: false, alter: true })

let server = https.createServer(app);
server.listen(HTTPS_PORT, () => console.log("server runnning"));

const server = https.createServer(app);
server.listen(4000, () => console.log(`Example app listening at http://localhost:${port}`))