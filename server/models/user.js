"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  }
  User.init(
    {
      userName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: DataTypes.STRING,
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      social: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      // freezeTableName : true,
      timestamps: false,
      sequelize,
      modelName: "User",
    }
  );


  return User;
};