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
  class DiariesHashtag extends Model {
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
  DiariesHashtag.init(
    {
      diariesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hashtagsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DiariesHashtag",
    }
  );
  return DiariesHashtag;
};
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  };
  DiariesHashtag.init({
    diariesId: {
      type : DataTypes.INTEGER,
      allowNull : false, 
    },
    hashtagsId: {
      type : DataTypes.INTEGER,
      allowNull : false, 
    },
  }, {
    sequelize,
    modelName: 'DiariesHashtag',
  });
  return DiariesHashtag;
<<<<<<< HEAD
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
