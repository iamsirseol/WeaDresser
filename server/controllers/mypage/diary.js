const { Diarie, DiariesHashtag, Hashtag, sequelize } = require("../../models");
const { isAuthorized, isValid } = require("../tokenfunction/index");

module.exports = {
  // * GET mypage/diary
  findOne: async (req, res) => {
    // token validation
    const token = isAuthorized(req); 
    if(!token) return res.status(401).send("Unauthorized");
    // user validation 
    const foundUser = await isValid(token.email, token.id);
    if(!foundUser) return res.status(401).send("Unauthorized");

    try{
    // find diary with all hashtags 
      const diary = await Diarie.findAll({ 
        where : { userId : foundUser.id}, 
        include : { 
          model : Hashtag, 
          through : {attributes :[]},
          attributes : ['name'],
          raw:true
        },
        limit:1, order : [['createdAt', 'DESC']], 
        nest : true , raw: true
      })
      // hash tag array (if cli wants string => join() )
      const hasharr = diary.map(ele => ele.Hashtags.name)
      diary[0].hashtag = hasharr
      return res.json(diary[0])
    }
    catch(err){
      return res.status(500).send("Internal server error")
    }
  },

  // * GET  mypage/diary:createdAt
  findOnebyDate: async (req, res) => {

    // token validation
    const token = isAuthorized(req); 
    if(!token) return res.status(401).send("Unauthorized");
    // user validation 
    const foundUser = await isValid(token.email, token.id);
    if(!foundUser) return res.status(401).send("Unauthorized");

    const { createdAt } = req.params;
    if(!createdAt) return res.status(400).send("Bad request");

    //! createdAt => 변환만 해주면 끝!
     try{
      // find diary with all hashtags 
      const diary = await Diarie.findAll({ 
        where : { userId : foundUser.id , createdAt : createdAt}, 
        include : { 
          model : Hashtag, 
          through : {attributes :[]},
          attributes : ['name'],
          raw:true
        },
        limit:1, order : [['createdAt', 'DESC']], 
        nest : true , raw: true
      })
      // hash tag array (if cli wants string => join() )
      const hasharr = diary.map(ele => ele.Hashtags.name)
      diary[0].hashtag = hasharr
      return res.json(diary[0])
    }
    catch(err){
      return res.status(500).send("Internal server error")
    }
  },
  // * PATCH mypage/diary
  update: async (req, res) => {
    // token validation
    const token = isAuthorized(req); 
    if(!token) return res.status(401).send("Unauthorized");

    // user validation 
    const foundUser = await isValid(token.email, token.id);
    if(!foundUser) return res.status(401).send("Unauthorized");

    //! req.body validation 협의 
    const { diaryId, content, image, share, hashtag } = req.body;
    if(!diaryId || !content || !image) return res.status(400).send("Bad request")
    if( share === null  || share === undefined ) return res.status(400).send("Bad request")
    
    // transaction start
    try{ // find diary => 
      await sequelize.transaction( async t => { 
        const diary = await Diarie.findOne({ 
          where : { id : diaryId }, 
          include : { model : Hashtag, through : DiariesHashtag }, 
          transaction : t
        }) // Not found any (server down)
        if(!diary) return res.status(400).send("Bad request");

        await Hashtag.bulkCreate( // create bulk hash first => findAll tags
          hashtag.map(ele => { return {name :ele} }), 
          { through : DiariesHashtag, ignoreDuplicates : true, transaction : t }  
        )
        const foundTags = await Hashtag.findAll({ where : { name : hashtag }, transaction : t }) 
        // update each values => save 
        await diary.set(req.body, { transaction : t });
        await diary.setHashtags(foundTags, { transaction : t })
        await diary.save({transaction : t });
        const edited_diary = await Diarie.findOne({ where : { id : diaryId}, include : { model : Hashtag, through : DiariesHashtag }, transaction : t});
        return res.status(200).json({edited_diary}) 
      })
    }
    catch(err){ // db error => sequelize roll back 
      console.log(err);
      return res.status(500).send("Internal server error")
    }


  },
  // * DELETE  mypage/diary (게시글 삭제)
  delete: async (req, res) => {
    // token validation
    const token = isAuthorized(req); 
    if(!token) return res.status(401).send("Unauthorized");

    // user validation 
    const foundUser = await isValid(token.email, token.id);
    if(!foundUser) return res.status(401).send("Unauthorized");

    // req.body validation 
    const { diaryId } = req.body;
    if(!diaryId) return res.status(400).send("Bad request")
    console.log(req.body)

    // transaction start here
    try{ // find Diary => find all hashtags  => delete the association => delete the diary   
      await sequelize.transaction( async t => { 
        const diary = await Diarie.findOne({ where : { id : diaryId }, include : { model : Hashtag, through : DiariesHashtag }, transaction : t})
        if(!diary) return res.status(203).send("Already up to date") 
        // diary X ( server be broken)
      
        const diary_tags = await diary.getHashtags({ transaction : t });
        if(!diary_tags || diary_tags.length === 0) return res.status(200).send("Deleted") 
        // no hashtags to delete (server be broken)

        // delete association, and delete diary
        await diary.removeHashtags(diary_tags, { transaction : t });
        await diary.destroy({ transaction : t });
        return res.status(200).send("Deleted") 
      })
    }catch(err){
      console.log(err)
      return res.status(500).send("Internal server error")
    }
  },
};
