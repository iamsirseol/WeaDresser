<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
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
      userName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      social: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      social: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable("Users");
  },
};
=======
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
