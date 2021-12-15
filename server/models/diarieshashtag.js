"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiariesHashtag extends Model {

    static associate(models) {
      models.Diarie.belongsToMany(models.Hashtag, { through : DiariesHashtag , onDelete: 'CASCADE', })
      models.Hashtag.belongsToMany(models.Diarie, { through : DiariesHashtag,  onDelete: 'CASCADE', })
    }
  }

  DiariesHashtag.init(
    {
      DiarieId: {
        type: DataTypes.INTEGER,
        references:{
          model : 'Diarie',
          key : 'id',
        }
      },
      HashtagId :{
        type: DataTypes.INTEGER,
        references:{
          model : 'Hashtag',
          key : 'id',
        }
      },
      // granted : { 
      //   type : DataTypes.BOOLEAN,
      //   defaultValue : true,
      // }
    },
    {
      // freezeTableName : true,
      timestamps: false,
      sequelize,
      modelName: "DiariesHashtag",
    }
  );
  return DiariesHashtag;
};