"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {

    static associate(models) {

    }
  }

  Like.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    },
    {
      // freezeTableName : true,
      timestamps: false,
      sequelize,
      modelName: "Like",
    }
  );


  return Like;
};