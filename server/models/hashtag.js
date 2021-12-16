"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {

    static associate(models) {
      // Hashtag.belongsToMany(models.Diarie, { through : 'DiariesHashtags', as :'hashtag-diary' });
    }
  }
  Hashtag.init(
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      // freezeTableName : true,
      timestamps: false,
      sequelize,
      modelName: "Hashtag",
      indexes: [{
        unique: true,
        fields: ['name'] // you can use multiple columns as well here
      }]
    }
  );

  return Hashtag;
};