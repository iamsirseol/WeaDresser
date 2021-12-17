const { isAuthorized, isValid } = require('./tokenfunction')
const { Diarie, Hashtag, DiariesHashtag, sequelize } = require('../models')
module.exports = {
  // * POST  /diary 
  create : async (req, res) => {
    // // token validation
    const result = isAuthorized(req); 
    if(!result) return res.status(401).send("Unauthorized");

    // // user validation 
    const foundUser = await isValid(result.email, result.id);
    if(!foundUser) return res.status(401).send("Unauthorized");
    console.log('------------------------')
    console.log(result)
    console.log('------------------------')

    // req.body validation 

    const{ content,image, weather, tempMin, tempMax, temp, hashtag , share } = req.body;
    console.log(req.file.location)
    console.log({ content, weather, tempMin, tempMax, temp, hashtag , share }, 'body@@@')
    if( !content || !weather || 
      !tempMin|| !tempMax ||
      share === undefined || share === null || share === ''){
        return res.status(400).send("Bad request")
    }
    // Make hashtag array with name properties 
    let hashArr = hashtag || [] ;
    const tagData = hashArr.split(', ').map( ele => { return { name : ele } })
    req.body.userId = foundUser.id;
    req.body.image = req.file.location
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