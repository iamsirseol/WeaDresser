<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Diaries", {
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Diaries', {
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
=======
        type: Sequelize.INTEGER
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
        type: Sequelize.INTEGER
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
<<<<<<< HEAD
<<<<<<< HEAD
        type: Sequelize.STRING,
      },
      weather: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      temp: {
        allowNull: false,
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.STRING
      },
      weather: {
        allowNull: false,
        type: Sequelize.STRING
      },
      temp :{ 
        allowNull :false,
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.FLOAT,
      },
      tempMax: {
        allowNull: false,
<<<<<<< HEAD
<<<<<<< HEAD
        type: Sequelize.FLOAT,
      },
      tempMin: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // !!! 지우는게 일단 됫었다!
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        type: Sequelize.FLOAT
      },
      tempMin: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      userId: {  
        allowNull: false,
        type: Sequelize.INTEGER,
        // !!! 지우는게 일단 됫었다! 
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
        // references: {
        //   model: {
        //     tableName: 'Users'
        //   },
        //   key: 'id'
        // }
      },
      share: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
<<<<<<< HEAD
<<<<<<< HEAD
        defaultValue: Sequelize.literal("NOW()"),
=======
        defaultValue: Sequelize.literal("NOW()") 

>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
        defaultValue: Sequelize.literal("NOW()") 

>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
<<<<<<< HEAD
    await queryInterface.dropTable("Diaries");
  },
};
=======
    await queryInterface.dropTable('Diaries');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
    await queryInterface.dropTable('Diaries');
  }
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
