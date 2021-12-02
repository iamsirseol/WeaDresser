<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
const { Model } = require("sequelize");
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';
const {
  Model
} = require('sequelize');
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  Like.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      diariesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  };
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
    diariesId: {
      type: DataTypes.INTEGER,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
<<<<<<< HEAD
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
