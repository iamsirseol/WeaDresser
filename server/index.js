require("dotenv").config();
const express = require('express')
const app = express()
const cors = require("cors");
const https = require('https');
// const cookieParser = require("cookie-parser");
// const sequelize = require('Sequelize')

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

app.get('/', (req, res)=>{
  res.send("Hello World") // 일단 '/' 귀결되면 Hello world (just for 배포)
})

// sequelize.sync({ force: false, alter: true }) // <- sequelize init 필요 ! (보류)
let credentials ; // "여기에 AWS 키"
let server;
if(credentials){
  server = https.createServer(credentials, app);
  server.listen(port, () =>  console.log("httpSSS server running"))
} 
else{
  server = app.listen(port, () =>  console.log("http server running"))
} 
