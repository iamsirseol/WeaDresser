'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diarie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Diarie.init({
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    weather: {
      type: DataTypes.STRING,
      allowNull :false
    },
    tempMax:{
      type: DataTypes.INTEGER,
      allowNull :false
    },
    tempMin:{
      type: DataTypes.INTEGER,
      allowNull :false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull :false
    },
    share:{
      type : DataTypes.BOOLEAN, 
      defaultValue: false,
    }, 
  }, {
    sequelize,
    modelName: 'Diarie',
  });
  return Diarie;
};