const { User, Diarie,sequelize } = require('../models')
const { Op } = require('Sequelize');

module.exports = {
  // * GET  /home
  findRandom : async (req, res) => {
    // SELECT U.id, U.userName, U.email  
    // FROM Users U  
    // LEFT JOIN Diaries D  ON U.id = D.userId WHERE U.id =2;
    const result = await Diarie.findAll({
      attributes :[ 'id', 'image', 'temp', 'userId'],
      // { '$U.name$' : { [Op.like] : search } },
      where : { id : 2,  },
      include :{ // Left join
        model : User, as : 'U',
        // attributes: { exclude : all}
      }, 
      raw : true  
    })
    .catch(err => {
      console.log(err)
      res.send("err")
    })
    console.log(result);
    return res.json(result)
  }, 

  // * GET  /home/:user
  findById : (req, res) => {
    const para = req.params.user
    return res.send(`GET /home/:user routing is good now!!,  your para = ${para}`)
  }
}