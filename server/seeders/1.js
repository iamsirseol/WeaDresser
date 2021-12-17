'use strict';
const { Diarie, sequelize, User, Like  } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    const getRandonNumber = (min, max) => Math.floor( Math.random()* max ) + min 
    const getDiaryData = (userid) => {
      const off = getRandonNumber(5, 15) + 1
      const minuse = getRandonNumber(0,10) % 2 ? -1 : 1
      const tempRange = getRandonNumber(0, 40);
      let tempCur = tempRange <= 20 ? tempRange* minuse : tempRange 
      return {
        image : "dumimage" + (userid ),
        content : 'dummy content' + (userid),
        weather : 'weather' + (userid),
        temp : tempCur, 
        tempMax : tempCur + off, 
        tempMin : tempCur - off,
        share : getRandonNumber(0,100)%2,
        userId : userid,
        likeCounts : 0,
      }
    }
    const createUserData = async (userLen) => {
      const userData = new Array(userLen).fill(0).map( (ele, idx) => {
        const data =   { 
          userName : 'dummy user ' +( idx + 1),
          email : `abc${idx+1}@email.com`,
          password : `1234`,
          gender : getRandonNumber(0,100)%2 ? 'male' : 'female',
          social : getRandonNumber(0,100)%2 ,
        }
        return data
      })
      return await queryInterface.bulkInsert( 'Users' ,userData, { returning : true })
    }
    
    const createDiaryData = async (userLen) => {
      const userid = getRandonNumber(1, userLen)
      const data = getDiaryData( userid ) // userid
      const user = await User.findByPk(userid);
      return await user.createDiarie(data)
    }

    const user_len = 500
    const diary_len = 1000
    await createUserData(user_len)
    for(let i = 0 ; i < diary_len ; i ++){
      await createDiaryData(user_len)
    }

    // const diaryLikes = await Like.findAll({ where : { diarieId : 1 } })
    // const before = await diary.getLikes({ raw :true, nest : true })
    // console.log(before)

    // 연ㅕ 삭ㅔ 
    // await diary.removeLikes(diaryLikes)
    // const after = await diary.getLikes({ raw :true, nest : true })
    // console.log(after)

    // await diary.removeLikes(diaryLikes)
    // await diary.destroy()

    //실제 라이크 테블 
    // const result = await Like.findAll({ where : { diarieId : 1 }, raw : true, nest : true })
    // console.log(result)
  },
  down: async (queryInterface, Sequelize) => {
    /**
    // await diary.addHashtags(hashtags, { through : DiariesHashtag , ignoreDuplicates : true})
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
    return queryInterface.bulkDelete('Diaries', null, {})

  }
};
    // let data ={
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
    // const diary = await Diarie.findByPk(11, { include : { model : Hashtag, through : {attributes:[]} }})   
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

    // return sequelize.transaction(function (t) {

        // const f = await Diarie.findByPk(221, { include : {model : Hashtag,  through : { attribuets : [] }} })
    // console.log(JSON.stringify(f))

    // const createdDiary = await Diarie.create(data)

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




    // let data ={
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
    // const diary = await Diarie.findByPk(11, { include : { model : Hashtag, through : {attributes:[]} }})   
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

    // return sequelize.transaction(function (t) {

        // const f = await Diarie.findByPk(221, { include : {model : Hashtag,  through : { attribuets : [] }} })
    // console.log(JSON.stringify(f))

    // const createdDiary = await Diarie.create(data)

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