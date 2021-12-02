<<<<<<< HEAD
"use strict";
const { Model } = require("sequelize");
=======
'use strict';
const {
  Model
} = require('sequelize');
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
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
<<<<<<< HEAD
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
=======
  };
  User.init({
    userName: {
      allowNull: false,
      type : DataTypes.STRING,
    },
    email:{
      allowNull:false,
      type:DataTypes.STRING,
    }, 
    password: DataTypes.STRING,
    gender: {
      allowNull:false,
      type: DataTypes.STRING,
    },
    social:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
    },
  }, {
    timestamps : false, 
    sequelize,
    modelName: 'User',
  });

  // !! 일단 찜찜 OK   
  // User.associate = models => { 
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  //   User.hasMany(models.Diarie, {
  //     foreignKey : "userId",
  //     // onDelete : "cascade"
  //   })
  // }

  return User;
<<<<<<< HEAD
};
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
