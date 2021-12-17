"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiariesHashtag extends Model {

    static associate(models) {
      // models.User.belongsToMany(models.Diarie, { through : DiariesHashtag, foreignKey : 'userId', });
      // models.Diarie.belongsToMany(models.User, { through : DiariesHashtag, foreignKey : 'diarieId', });
    }
  }

  DiariesHashtag.init(
    {
      diarieId : {
        type: DataTypes.INTEGER,
      },
      hashtagId : {
        type: DataTypes.INTEGER,
      }
    },
    {
      // freezeTableName : true,
      indexes: [{
        unique: true,
        fields: ['diarieId', 'hashtagId']
      }],
      timestamps: false,
      sequelize,
      modelName: "DiariesHashtag",
    }
  );


  return DiariesHashtag;
};