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
  class Hashtag extends Model {
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
  Hashtag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hashtag",
    }
  );
  return Hashtag;
};
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  };
  Hashtag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hashtag',
  });
  return Hashtag;
<<<<<<< HEAD
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
