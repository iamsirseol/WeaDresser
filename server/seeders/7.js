'use strict';
const { Diarie, sequelize, User, Like, Hashtag, DiariesHashtag  } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const diary = await Diarie.findByPk(7, { model : Hashtag, through : DiariesHashtag })
    const hashs = await diary.getHashtags({ raw : true, nest : true })
    console.log(hashs)
  },
  down: async (queryInterface, Sequelize) => {
    /**
    // await diary.addHashtags(hashtags, { through : DiariesHashtag , ignoreDuplicates : true})
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Users', null, {})
    return queryInterface.bulkDelete('Hashtags', null, {})

  }
};
