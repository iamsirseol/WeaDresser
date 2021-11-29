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
    temp :{ 
      type: DataTypes.FLOAT,
      allowNull :false,
    },
    tempMax:{
      type: DataTypes.FLOAT,
      allowNull :false
    },
    tempMin:{
      type: DataTypes.INTEGER,
      allowNull :false
    },
    userId:{ // !!! 
      type: DataTypes.INTEGER,
      allowNull :false,
      // references: {
      //   model: User,
      //   key: 'id'
      // }
    },
    share:{
      type : DataTypes.BOOLEAN, 
      defaultValue: false,
    }, 
  }, {
    updatedAt:false, // !* query check   
    sequelize,
    modelName: 'Diarie',
  });

  // !!! 
  Diarie.associate = (models) => {
    Diarie.belongsTo(models.User, {
      // onDelete : 'cascade',
      as: 'U',
      foreignKey : 'userId'
    })
  }

  return Diarie;
};