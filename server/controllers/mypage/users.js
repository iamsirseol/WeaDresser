const { User, Diarie, Like } = require("../../models");
const { isAuthorized } = require("../tokenfunction/index");

module.exports = {
  // * GET mypage/users
  findOne: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    if (!accessTokenData) {
      return res.status(401).send("not authorized");
    }
    try {
      const userInfo = await User.findOne({
        where: {
          id: id,
        },
      });
      console.log(userInfo);

      res.status(200).send({ data: { userName: userInfo.userName } });
    } catch (err) {
      console.log(err);
    }
  },
  // * PATCH mypage/users
  update: async (req, res) => {
    const { password, editPassword, userName } = req.body;
    // console.log('@@@',req.body)
    const accessToken = isAuthorized(req);

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
      res.status(201).send({ data: editUserInfo.userName });
    } catch (err) {
      console.log(err);
    }
  },
  // * DELETE  mypage/users 회원탈퇴
  delete: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log(accessTokenData);
    if (!accessTokenData) {
      return res.status(401).send("not authorized");
    }
    try {
      await User.destroy({
        where: {
          id: accessTokenData.id,
        },
      });
      await Diarie.destroy({
        where: {
          userId: accessTokenData.id,
        },
      });
      await Like.destroy({
        where: {
          userId: accessTokenData.id,
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
}