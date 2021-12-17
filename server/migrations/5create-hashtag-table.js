'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return  queryInterface.createTable('Hashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name :{
        type : DataTypes.STRING,
        unique : true
      }
    })
  },
  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Hashtags');
  }
};