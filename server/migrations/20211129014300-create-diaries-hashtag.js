<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DiariesHashtags", {
=======
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiariesHashtags', {
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER,
      },
      diariesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hashtagsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
=======
        type: Sequelize.INTEGER
      },
      diariesId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hashtagsId: {
        allowNull: false,
        type: Sequelize.INTEGER
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.dropTable("DiariesHashtags");
  },
};
=======
    await queryInterface.dropTable('DiariesHashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
