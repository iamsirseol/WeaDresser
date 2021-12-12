const { isAuthorized } = require('./tokenfunction')
const { User, Diarie, Hashtag } = require('../models')
module.exports = {
  // * POST  /diary 
  create : async (req, res) => {
    // req.body validation 
    const{ 
      userId, content, weather, 
      image, tempMin, tempMax, temp, 
      likeCounts, hashtag , share
    } = req.body;

    if( !userId || !content || !weather || !image || 
      !tempMin|| !tempMax || !temp || !likeCounts || 
      share === undefined || share === null || share === '' || 
      hashtag === null || hashtag === undefined){
        return res.status(404).send("Bad request")
      }
    const insertTag = hashtag.map( ele => { 
      let obj = { name : ele }
      return obj
     })
    
     console.log(insertTag)
    
    // token validation
    const { email } = isAuthorized(req); 
    if( !email ) return res.status(401).send("Unauthorized")

    // user validation 
    const foundUser = await User.findOne({ where : { email : email  }}); 
    if( !foundUser ) return res.status(401).send("user Unauthorized")

    // excute create Diaries table
    Diarie.create({ 
      userId, content, image, weather, 
      temp, tempMin, tempMax, likeCounts,
    })
    .then( async (created) => {
      // if success to create diary-post 
      if( insertTag.length !== 0 ){
        const hashCreated = await Hashtag.bulkCreate( insertTag ,{ returning : true } )
        return res.json(hashCreated)
      }
    })
  },

}