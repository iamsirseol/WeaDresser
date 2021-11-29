'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiariesHashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diariesId: {
        type: Sequelize.INTEGER
      },
      hashtagsId: {
        type: Sequelize.INTEGER
      },
      postsId: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DiariesHashtags');
  }
};