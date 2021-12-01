const { sequelize } = require('../../models/index')
module.exports = {
  // *  POST oauth/google
  google : async (req, res) => {
  // friend list where user_id = token user
    return res.send("oauth/google routing OK")
  },
  // *  POST users/signout
  kakao : (req, res) => {
    return res.send("oauth/kakao routing OK")
  },
}