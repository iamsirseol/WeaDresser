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
      // userId : {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      // },
      // diariesId : {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      // },
    })
  },
  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Likes');
  }
};