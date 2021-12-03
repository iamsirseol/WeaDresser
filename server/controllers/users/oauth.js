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
    
    const kakaoUser = await axios({
      method: "get",
      url: `https://kapi.kakao.com/v2/user/me?access_token=${accessToken}`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .catch(err => {
      console.log(err);
      return res.status(501).send("kakao invalid error")
    })
    
    const { nickname } = kakaoUser.data.properties;
    const { id } = kakaoUser.data; 
    console.log(nickname, id)
    if( !nickname || !id ) 
      return res.status(403).send("Unauthrized")

      // find user 
    const kakaoEmail = nickname + id 
    const findUser = await User.findOne({
      where : { email : kakaoEmail }, 
    })
    // send token if user exsits 
    if(findUser){
      const { email } = findUser.dataValues;
      const accessToken = generateToken( { email })
      return res.json({ accessToken : accessToken, email })
    }

    // create user on Users table 
    const userProperties = {
      email : kakaoEmail,
      userName : nickname, 
      social : true, 
      password : 'temp1234',
      gender : 'male' // <--- 문제!! 
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
      return res.status(500).send("Internal server error");
    })

  },
};
// id: 2006016493,
// 2018503437,
// 2018503437이윤환 