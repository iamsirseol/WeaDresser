const { sequelize } = require('../../models/index');
const { generateToken } = require('../tokenfunction');
const { User } = require('../../models')
module.exports = {
  // *  POST oauth/google
  google: async (req, res) => {
    const{ email, userName } = req.body; 
    if(!email) return res.status(401).send("Unauthorized")
    
    // find user 
    const findUser = await User.findOne({
      where : { email }, 
    })
    // send token if user exsits 
    if(findUser){
      const { email } = findUser.dataValues;
      const accessToken = generateToken( { email })
      return res.json({ accessToken : accessToken, email })
    }

    // create user on Users table 
    const userProperties = {
      email,
      userName, 
      social : true, 
      password : 'temp1234',
      gender : 'male'
    }
    
    User.create(userProperties)
    .then( createdUser => {
      //  success to create
      const { email } = createdUser.dataValues;
      const accessToken = generateToken( { email })
      return res.json({ accessToken : accessToken, email })

    })
    .catch(err => {
      // faile to create
      console.log(err)
      return res.status(500).send("Internal server error");
    })
  },

  // *  POST oauth/kakao
  kakao: (req, res) => {
    return res.send("oauth/kakao routing OK");
  },
};
