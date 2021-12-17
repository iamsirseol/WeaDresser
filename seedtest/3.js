'use strict';
const { Diarie, sequelize, User, Like  } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // * When user delete likes on diary-post

    // diaryId, userId from request 
    const deletePost = async (diaryId, userId) => {
      // find diary => find like all with diaryId => found diary remove them all => delete diary
      const diary = await Diarie.findByPk(diaryId);
      let likesAll = await diary.getLikes({ attributes : ['id'], raw: true})
      likesAll = likesAll.map(ele => ele.id)
      await Like.destroy({ where : { id : likesAll }})
      await diary.destroy();
    }

    const check1 = async (diaryId, userId) => {
      const deletedLikes = await Like.findAll({ where : { diarieId : diaryId }, raw : true} )
      const deletedDiary = await Diarie.findByPk(diaryId, {raw: true})
      console.log(deletedLikes)
      console.log(deletedDiary)
    }

    // await check1(20,5)
    // await deletePost(20,5)
    // await check1(20,5)

    // await check2(12,7)
    // await deleteUser(12,7)
    // await check2(12,7)
  },
  down: async (queryInterface, Sequelize) => {
  }
};
