'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return  queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId : {
        // allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model : 'Users',
          key : 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      diarieId : {
        // allowNull: false,
        type: DataTypes.INTEGER,
        references:{
          model : 'Diaries',
          key : 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
    })
    .then( ()=> {
      return queryInterface.addIndex('Likes', ['userId', 'diarieId'], { unique : true })
    })
  },
  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Likes');
  }
};