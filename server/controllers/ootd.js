const { User, Diarie, sequelize } = require("../models");
const { isAuthorized } = require("./tokenfunction/index");
const { Op } = require("sequelize");
module.exports = {
  // * GET  /ootd   또는   /ootd?offset= & limit= 
  findTopLike :async (req, res) => {
    const { offset, limit } = req.query;
    const ootdResult = await sequelize.query(
      `SELECT U.userName, D.image, D.id
        FROM Users U JOIN Likes L ON L.userId = U.id 
        JOIN Diaries D ON L.diariesId=D.id
        ORDER BY D.id;
      `,
      { raw: true }
    )
      .catch(err => {
        res.status(500).send("Internal server error")
      })
      // console.log(ootdResult[0], ootdResult[0].length)    
      const resBody = ootdResult[0].slice()
      const maxId = ootdResult[0].reduce( (tot,ele) => 
        tot < ele.id ? ele.id : tot 
      , 0);
      // console.log("maxID===============", maxId)
      let cntArr = new Array(maxId+1).fill(0);
      resBody.map( eleObj => {
        cntArr[eleObj.id]++;
      })
      console.log(cntArr)

    return !offset || !limit
      ? res.send(`GET /ootd routing is good now`)
      : res.send(`GET /ootd with para is good now!,  offset=${offset} limit=${limit}`)
  }, 

  // * POST  /ootd/like
  addLike: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { diariesId } = req.body;
    if (!diariesId) {
      return res.status(400).send("Bad Request");
    }
    if (!accessTokenData) {
      res.status(401).json({ message: "unauthorized" });
    }
    return Like.findOrCreate({
      where: {
        userId: accessTokenData,
        diariesId: diariesId,
      },
      default: {
        userId: accessTokenData,
        diariesId: diariesId,
      },
    })
      .then(([data, created]) => {
        return !created
          ? res.status(400).send("Bad Request")
          : res.status(201).send("ok");
      })
      .catch((err) => {
        return res.status(500).send("server error");
      });
  },
};
