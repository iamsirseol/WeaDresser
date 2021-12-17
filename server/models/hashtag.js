"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {

    static associate(models) {
    }
  }
  Hashtag.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name : {
        type: DataTypes.STRING,
        unique : true
      }
    },
    {
      // freezeTableName : true,
      timestamps: false,
      sequelize,
      modelName: "Hashtag",
    }
  );

  return Hashtag;
};