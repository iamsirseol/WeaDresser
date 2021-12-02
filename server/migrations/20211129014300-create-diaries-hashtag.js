<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DiariesHashtags", {
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiariesHashtags', {
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
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
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.INTEGER
      },
      diariesId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hashtagsId: {
        allowNull: false,
        type: Sequelize.INTEGER
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
<<<<<<< HEAD
    await queryInterface.dropTable("DiariesHashtags");
  },
};
=======
    await queryInterface.dropTable('DiariesHashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
    await queryInterface.dropTable('DiariesHashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
