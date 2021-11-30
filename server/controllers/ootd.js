
module.exports = {
  // * GET  /ootd   또는   /ootd?offset= & limit= 
  findTopLike : (req, res) => {
    const { offset, limit } = req.query;
    return !offset || !limit
      ? res.send(`GET /ootd routing is good now`)
      : res.send(`GET /ootd with para is good now!,  offset=${offset} limit=${limit}`)
  }, 

  // * POST  /ootd/like 
  addLike : (req, res) => {
    return res.send(`POST /ootd/like routing is good now!!, check your req.body`)
  }
}