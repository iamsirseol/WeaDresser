module.exports = {
  // * GET  /home
  findRandom : (req, res) => {
    return res.send("GET /home  routing is good now")
  }, 

  // * GET  /home/:user
  findById : (req, res) => {
    const para = req.params.user
    return res.send(`GET /home/:user routing is good now!!,  your para = ${para}`)
  }
}