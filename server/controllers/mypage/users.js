const { User, Diarie, Like } = require("../../models");
const { verifyAccessToken } = require("../tokenfunction/index");
const bcrypt = require("bcrypt");
module.exports = {
  // * GET mypage/users
  findOne: async (req, res) => {
    const accessTokenData = verifyAccessToken(req);
    if (!accessTokenData) {
      return res.status(401).send("not authorized");
    }
    try {
      const userInfo = await User.findOne({
        where: {
          id: accessTokenData,
        },
      });
      res
        .status(200)
        .send({ data: { id: userInfo.id, userName: userInfo.userName } });
    } catch (err) {
      console.log(err);
    }
  },

  // * PATCH mypage/users
  update: async (req, res) => {
    const { password, editPassword, userName } = req.body;
    const accessToken = verifyAccessToken(req);

    if (accessToken) {
      return res.status(401).send("not authorized");
    }
    try {
      const checkUserPassword = await User.findOne({
        where: {
          password: password,
        },
      });
      if (checkUserPassword) {
        if (accessToken.id !== checkUserPassword.id) {
          return res.status(400).send("password id already exitst");
        }
      }
      const editUserInfo = User.update({
        password: editPassword,
        userName: userName,
      });
      res.status(201).send({ data: editUserInfo.userName, message: "ok" });
    } catch (err) {
      console.log(err);
    }
  },
  // * DELETE  mypage/users 회원탈퇴
  delete: async (req, res) => {
    const accessTokenData = verifyAccessToken(req);

    if (!accessTokenData) {
      return res.status(401).send("not authorized");
    }
    try {
      await User.destroy({
        where: {
          id: accessTokenData,
        },
      });
      await Diarie.destroy({
        where: {
          userId: accessTokenData,
        },
      });
      await Like.destroy({
        where: {
          userId: accessTokenData,
        },
      });
      res
        .clearCookie("authorization", {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          path: "/",
          domail: "/",
        })
        .status(200)
        .send("ok");
    } catch (err) {
      console.log(err);
    }
  },
};
