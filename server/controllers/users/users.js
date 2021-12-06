const { sign } = require("jsonwebtoken");
const { User } = require("../../models");
require("dotenv").config();

module.exports = {
  // *  POST users/email
  checkEmail: (req, res) => {
    return res.send("POST /users/check-email OK");
  },
  // *  GET users/send-email
  sendEmail: (req, res) => {
    console.log("ok it works");
    return res.send("GET /users/send-email OK");
  },

  // *  POST users/signin
  signin: async (req, res) => {
    // req.body validation
    // console.log(req.body)
    if (!req.body.email || !req.body.password)
      return res.status(422).send("Insufficient parameters");

    const result = await User.findOne({
      where: { email: req.body.email },
    }).catch((err) => {
      // db error
      return res.status(500).send("Internal server error");
    });
    // user not found ==> email 존재 x 비회원 유저 로그인 시도
    if (!result) return res.status(403).send("Not Found"); // <-- API 확인

    // email & password 확인
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    // password 불일치
    if (!user) return res.status(401).send("Unauthorized");

    // generate token
    const { id, email } = user.dataValues;
    const accessToken = sign(
      { id, email },
      process.env.ACCESS_SECRET,
      { expiresIn: "1d" } // <-- test 용 1day
    );
    //refresh_token  <--  현재 불필요
    const refreshToken = sign({ id, email }, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return res.json({ email, accessToken });
  },

  // *  POST users/signup
  signup: (req, res) => {
    console.log("okokokokokokokokokokokokokokokokok")
    const { email, password, userName, social, gender } = req.body;
    // if (email || password || userName || social)
      // return res.status(422).send("Insufficient parameters");
    console.log(email, password, userName , social , gender)
    User.findOrCreate({
      where: { email , password, userName, social, gender },
    })
      .then(([data, created]) =>
        !created
          ? res.status(409).send("Conflict")
          : res.status(201).send("Created")
      )
      .catch((err) => {
        console.log(err)
        return res.status(500).send("Internal server error");
      });
  },

  // *  POST users/signout
  signout: (req, res) => {
    return res.send("POST /users/signout OK");
  },
};
