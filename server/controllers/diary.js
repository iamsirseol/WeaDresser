const { isAuthorized, isValid } = require('./tokenfunction')
const { Diarie, Hashtag, DiariesHashtag, sequelize } = require('../models')
module.exports = {
  // * POST  /diary 
  create : async (req, res) => {
    // token validation
    const result = isAuthorized(req); 
    if(!result) return res.status(401).send("Unauthorized");

    // user validation 
    const foundUser = await isValid(result.email, result.id);
    if(!foundUser) return res.status(401).send("Unauthorized");

    // req.body validation 
    const{ userId, content, weather, image, tempMin, tempMax, temp, hashtag , share } = req.body;
    if( !userId || !content || !weather || !image || 
      !tempMin|| !tempMax || !temp ||  
      share === undefined || share === null || share === ''){
        return res.status(404).send("Bad request")
    }
    // Make hashtag array with name properties 
    let hashArr = hashtag || [] ;
    const tagData = hashArr.map( ele => { return { name : ele } })
    const data = req.body; 
    delete data.hashtag 

    // transaction start 
    try{ // Diari Create => Hashtags bulkCreate => Diarie <-> Hashtag bulkUpdate  
      const result = await sequelize.transaction( async t => { 
        const diary = await Diarie.create(data, { transaction : t }) 
        await Hashtag.bulkCreate(tagData, {
          through : DiariesHashtag, 
          ignoreDuplicates : true,
          transaction: t
        }) // find all tags after insert, since we filter duplicated hashtag 
        const foundTag = await Hashtag.findAll({ where : { name : hashArr}, transaction : t })
        await diary.setHashtags(foundTag, { transaction : t })
        return diary 
      });
      return res.json(result)      
    }catch(err){
      console.log(err)
      return res.status(500).send("Internal server error")
    }
  },
}