const { isAuthorized } = require('./tokenfunction')
const { User } = require('../models')
module.exports = {
  // * POST  /diary 
  create : async (req, res) => {
    // req.body validation 
    
    
    // token validation
    // const { email, id} = isAuthorized(req); 

    // const foundUser = await User.findOne({ where : { email } }); 
    // console.log(foundUser)
    return res.json({ foundUser })
  },

}