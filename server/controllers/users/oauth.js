const { sequelize } = require('../../models/index')
module.exports = {
  // *  POST oauth/google
  google: (req, res) => {
    return res.send("oauth/google routing OK");
  },

  // *  POST oauth/kakao
  kakao: (req, res) => {
    return res.send("oauth/kakao routing OK");
  },
};
