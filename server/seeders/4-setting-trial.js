const diary = require('../controllers/diary');
const { Diarie, Hashtag,DiariesHashtag, sequelize  } = require('../models')
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // let randata ={
    //   image:"image" ,
    //   content:"content",
    //   weather: 'cloud',
    //   temp: 12,
    //   tempMax: 17,
    //   tempMin: 2 ,
    //   likeCounts: 0,
    //   share:  true ,
    // } 
    // let hashArr = ["짜자자asdfasdf", "adsf짬뽕", "크asdfsadf크"];
    // let hashtags = hashArr.map( (ele) => { 
    //   let obj = { name : ele }
    //   return obj
    // })
    // // const diary = await Diarie.findByPk(11, { include : { model : Hashtag, through : {attributes:[]} }})   
    // console.log("original diary", JSON.stringify(diary))
    // const createHash = await Hashtag.bulkCreate(hashtags, { through : DiariesHashtag, ignoreDuplicates : true })
    // const foundHash = await Hashtag.findAll({ where : { name : hashArr} }) 
    // await diary.setHashtags(foundHash);
    // const getRe = await diary.getHashtags({through : { attributes : []}})
    // console.log("createdHash", JSON.stringify(createHash))
    // // console.log("foundHash", JSON.stringify(foundHash))
    // console.log("get diary hash after set", JSON.stringify(getRe) )
    // const found = await Diarie.findAll({ where : { id : 11 }, include: { model : Hashtag, through : {attributes:[]} } }    ); 
    // console.log(JSON.stringify(found))
    // await diary.addHashtag(foundHash)

    // const found2 = await Diarie.findAll({ where : { id : 11 }, include: { model : Hashtag, through : {attributes:[]} } }    ); 
    // console.log(JSON.stringify(found2))


    // 151, { include : {model : Hashtag,  through : { attribuets : [] }}, raw: true },
    // const diary= await Diarie.findByPk( 150, { include : {model : Hashtag,  through : { attribuets : [] }}, raw: true, nest : true} )
    // const diary_tag = await diary.getHashtags()
    // const removed_tag = await diary.removeHashtags(diary_tag)
    // console.log(diary)
    const data = 
    { 
      content : 'two more edited content',
      image : 'twice edited image url', 
      share : false, 
      hashtag : ["샤라라랄", "ㅇㅇ", "ㅈㅈ"],
      userId : 2,
      weather : '좇같음',
      temp : 5.4,
      tempMin : 2.2,
      tempMax : 7.1,
    }
    


    const diary = await Diarie.findAll({ 
      where : { userId : 2}, 
      include : { 
        model : Hashtag, 
        through : DiariesHashtag 
      },
      limit:3,
      order : [['createdAt', 'DESC']], 
      raw: true, 
      nest : true 
    })
    console.log(diary)

    // return sequelize.transaction( (t) => { 
    //   return Hashtag.bulkCreate( hashtags, 
    //         { through : DiariesHashtag, ignoreDuplicates : true , transaction : t })
    //   .then( async createdHashtag => {
    //     console.log('created Hsh===', JSON.stringify(createdHashtag))
    //     const foundHash = await Hashtag.findAll({ where : { name : hashArr } })
    //     return createdDiary.setHashtags(foundHash, { transaction : t })
    //   })
    // })
    // .then( async finalResult => { 
    //   console.log(finalResult)
    // })
    // .catch( err => { 
    //   console.log(err)
    // })
  },
  down: async (queryInterface, Sequelize) => {
    /**
    // await diary.addHashtags(hashtags, { through : DiariesHashtag , ignoreDuplicates : true})
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('DiariesHashtags', null, {})

  }
};
// [
//   {
//     id: 1,
//     name: 'jean',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 1 }
//   },
//   {
//     id: 2,
//     name: 'thick',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 2 }
//   },
//   {
//     id: 5,
//     name: 'jumper',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 5 }
//   },
//   {
//     id: 6,
//     name: 'sweater',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 6 }
//   },
//   {
//     id: 11,
//     name: 'cold',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 11 }
//   },
//   {
//     id: 12,
//     name: 'humid',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 12 }
//   },
//   {
//     id: 21,
//     name: 'jogger',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 21 }
//   },
//   {
//     id: 22,
//     name: 'pants',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 22 }
//   },
//   {
//     id: 28,
//     name: 'ruined',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 28 }
//   },
//   {
//     id: 29,
//     name: 'hoody',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 29 }
//   },
//   {
//     id: 30,
//     name: 'fleece',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 30 }
//   },
//   {
//     id: 32,
//     name: 'leather',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 32 }
//   },
//   {
//     id: 33,
//     name: 'rainbow',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 33 }
//   },
//   {
//     id: 35,
//     name: 'nba',
//     DiariesHashtag: { DiarieId: 148, HashtagId: 35 }
//   }
// ]