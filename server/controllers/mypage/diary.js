module.exports = {
  // * GET mypage/diary
  findOne : (req ,res) => {
    return res.send("GET mypage/diary routing good now")
  },
  // * GET  mypage/diary:createdAt
  findOnebyDate : (req, res) => {
    return res.send(`GET mypage/diary:createdAt routing good now, para=${req.params.createdAt}` )
  },
  // * PATCH mypage/diary
  update : (req, res) => {
    return res.send('PATCH mypage/diary routing good now, check your req.body')
  },
  // * DELETE  mypage/diary (게시글 삭제)
  delete : (req, res) => {
    return res.send('DELETE mypage/diary routing good now')
  },
}