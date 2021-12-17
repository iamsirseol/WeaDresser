'use strict';
const { Diarie, sequelize, User, Like  } = require('../server/models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // * When user delete likes on diary-post

    const deleteUser = async (diaryId, userId) => {
      const user = await User.findByPk(userId);
      let diaryAll = await user.getDiaries();
      let likesAll = await user.getLikes()
      const likesIds = likesAll.map(ele => ele.id)
      const diaryIds = diaryAll.map(ele => ele.id)

      // await user.removeLikes(likesAll)
      await Like.destroy({ where : { id : likesIds } })
      // await user.removeLikes(diaryAll)
      await Diarie.destroy({ where : {  id :  diaryIds } })
      await user.destroy();
      // await user.removeDiaries(diaryAll)
      // await Like.destroy({ where : { id : likesAll }})
    }

    const check2 = async (diaryId, userId) => {
      const deletedLikes = await Like.findAll({ where : { userId : userId }, raw : true} )
      const deletedUser = await User.findByPk(userId, {raw: true})
      console.log(deletedLikes)
      console.log(deletedUser)
    }
    await deleteUser(0,32)

  },
  down: async (queryInterface, Sequelize) => {
  }
};
