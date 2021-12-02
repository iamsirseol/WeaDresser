<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hashtags", {
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hashtags', {
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
      name: {
        type: Sequelize.STRING,
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable("Hashtags");
  },
};
=======
    await queryInterface.dropTable('Hashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
    await queryInterface.dropTable('Hashtags');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
