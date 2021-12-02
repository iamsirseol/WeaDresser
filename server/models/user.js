"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      timestamps: false,
      sequelize,
      modelName: "User",
    }
  );

  // !! 일단 찜찜 OK
  // User.associate = models => {
  //   User.hasMany(models.Diarie, {
  //     foreignKey : "userId",
  //     // onDelete : "cascade"
  //   })
  // }

  return User;
};
