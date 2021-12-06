require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const https = require("https");
const indexRouter = require("./routers");
const cookieParser = require("cookie-parser");
//require("./models");
// const sequelize = require('Sequelize')

const port = 80;
const client = `${process.env.CLIENT_URL}` 
const test = `https://localhost:3000`
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true ,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"],
  })
);

app.use("/", indexRouter);
app.get("/", (req, res) => {
  res.send("Hello World"); 
});

app.get("/check", (req, res) => {
  res.send("check point success");
});

app.listen(port, () => console.log("http server running"));