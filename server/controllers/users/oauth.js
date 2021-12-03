const { generateToken } = require('../tokenfunction');
const { User } = require('../../models')
const axios = require('axios');
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
      // console.log(err)
      return res.status(500).send("Internal server error");
    })
  },

  // *  POST oauth/kakao
  kakao: async (req, res) => {
   // req body validation
    const { accessToken } = req.body;
    if( !accessToken ) return res.status(401).send("Unauthrized")
    
    const userInfo = await axios({
      method: "get",
      url: `https://kapi.kakao.com/v2/user/me?access_token=${accessToken}`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    console.log(userInfo.data);
    console.log(userInfo);
    return res.send(userInfo.data.properties)
  },
};
// id: 2006016493,
// 2018503437,
// 2018503437이윤환 