require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  // helpFunctions for jsonwebtoken
  generateToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1d" });
  },

  sendToken: (res, token) => {
    res.cookie("Bearer", token, {
      path: "/",
      httpOnly: true, //!cors option 나중에 보기 
    });
  },

  isAuthorized: (req) => {

    const cookieToken = req.cookies.Bearer;
    if (!cookieToken) return null;
    try {
      return verify(cookieToken, process.env.ACCESS_SECRET);

    } catch (err) {
      // return null if invalid token
      return null;
    }
  },
};
