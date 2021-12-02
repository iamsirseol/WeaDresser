const { Diarie, DiariesHashtag } = require("../../models");
const { isAuthorized } = require("../tokenfunction/index");

module.exports = {
  // * GET mypage/diary
  findOne: (req, res) => {
    return res.send("GET mypage/diary routing good now");
  },
  // * GET  mypage/diary:createdAt
  findOnebyDate: (req, res) => {
    return res.send(
      `GET mypage/diary:createdAt routing good now, para=${req.params.createdAt}`
    );
  },
  // * PATCH mypage/diary
  update: (req, res) => {
    return res.send("PATCH mypage/diary routing good now, check your req.body");
  },
  // * DELETE  mypage/diary (게시글 삭제)
  delete: async (req, res) => {
    const { id } = req.params;
    const accessToken = isAuthorized(req);

    if (accessToken) {
      return res.status(401).send("not authorized");
    }
    try {
      await Diarie.destroy({
        where: {
          id,
        },
      });
      await DiariesHashtag.destroy({
        where: {
          diariesId: id,
        },
      });
      res.status(200).send("delete diary");
    } catch (err) {
      console.log(err);
    }
  },
};
