<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hashtags", {
=======
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hashtags', {
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
<<<<<<< HEAD
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
=======
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.dropTable("Hashtags");
  },
};
=======
    await queryInterface.dropTable('Hashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
