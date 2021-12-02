require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "60s" });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "5d" });
  },

  sendRefreshToken: (res, refresh_token) => {
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
    });
  },

  sendAccessToken: (res, accessToken) => {
    // console.log("여기 샌드어세스토큰");
    res.json({ data: { accessToken }, message: "ok" });
  },

  verifyAccessToken: (req) => {
    // console.log("여기 버리파이인증");
    // console.log(req.headers);
    const authorization = req.headers["cookie"];
    // console.log(authorization.slice(4));
    if (!authorization) {
      return null;
    }
    let token = authorization.slice(4);

    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },

  verifyRefreshToken: (req) => {
    const refreshToken = req.cookies.refreshToken;
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },
};
