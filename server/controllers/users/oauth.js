const { generateToken, sendToken } = require('../tokenfunction');
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
      const { id, email } = findUser.dataValues; 
      const token = generateToken({ id, email });
      sendToken(res, token);
      return res.json({ email, token }); 
      //! accessToken 을 body에 안줘도 됨 ! 추후 다시 협의 보기
    }

    // payload to create user-data
    const userProperties = {
      email,
      userName, 
      social : true, 
      password : 'temp1234',
      gender : 'male'
    }
    
    // create user on Users table 
    User.create(userProperties)
    .then( createdUser => {
      //  success to create
      const { id, email } = createdUser.dataValues; 
      const token = generateToken({ id, email });
      sendToken(res, token);
      return res.json({ email, token }); 
      //! accessToken 을 body에 안줘도 됨 ! 추후 다시 협의 보기
    })
    .catch(err => {
      // faile to create
      return res.status(500).send("Internal server error");
    })
  },

  // *  POST oauth/kakao
  kakao: async (req, res) => {
   // req body validation
    const { accessToken } = req.body;
    if( !accessToken ) return res.status(401).send("Unauthrized")
    // get userInfo from kakao-oauth server
    const kakaoUser = await axios({
      method: "get",
      url: `https://kapi.kakao.com/v2/user/me?access_token=${accessToken}`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .catch(err => { // !kakao error 코드 확인 작업 필요! 
      console.log(err); // kakao-access denied => server error 
      return res.status(501).send("External server error")
    })

    // user validation 
    const { nickname } = kakaoUser.data.properties;
    const { id } = kakaoUser.data; 
    if( !nickname || !id ) // invalid kakao user  
      return res.status(403).send("Unauthrized")

    // find user 
    const kakaoEmail = nickname + id 
    const findUser = await User.findOne({
      where : { email : kakaoEmail }, 
    })
    // send token if user exsits 
    if(findUser){
      const { id, email } = findUser.dataValues; 
      const token = generateToken({ id, email });
      sendToken(res, token);
      return res.json({ email, token }); 
      //! accessToken 을 body에 안줘도 됨 ! 추후 다시 협의 보기
    }
    // payload to create user-data 
    const userProperties = {
      email : kakaoEmail,
      userName : nickname, 
      social : true, 
      password : 'temp1234',
      gender : 'male' //! <--- !문제 
    }
    // create user on Users table
    User.create(userProperties)
    .then( createdUser => { // success to create 
      const { id, email } = createdUser.dataValues; 
      const token = generateToken({ id, email });
      sendToken(res, token);
      return res.json({ email, token }); 
      //! accessToken 을 body에 안줘도 됨 ! 추후 다시 협의 보기

    })// faile to create
    .catch(err => {
      return res.status(500).send("Internal server error");
    })
  },
};
// id: 2006016493,
// 2018503437,
// 2018503437이윤환