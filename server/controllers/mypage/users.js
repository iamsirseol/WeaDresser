module.exports = {
  // * GET mypage/users
  findOne : (req ,res) => {
    return res.send("GET mypage/users routing good now")
  },
  // * PATCH mypage/users
  update : (req, res) => {
    return res.send("PATCH mypage/users routing good now")
  },
  // * DELETE  mypage/users 회원탈퇴
  delete : (req, res) => {
    return res.send("DELETE mypage/users routing good now")
  },
}