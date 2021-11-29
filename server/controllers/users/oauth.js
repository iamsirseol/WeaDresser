module.exports = {
  // *  POST oauth/google
  google : (req, res) => {
    return res.send("oauth/google routing OK")
  },
  
  // *  POST users/signout
  kakao : (req, res) => {
    return res.send("oauth/kakao routing OK")
  },
}

