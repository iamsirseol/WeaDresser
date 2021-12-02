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
  class Diarie extends Model {
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
  Diarie.init(
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: DataTypes.STRING,
      weather: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      tempMax: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      tempMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        // !!!
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: User,
        //   key: 'id'
        // }
      },
      share: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      updatedAt: false, // !* query check
      sequelize,
      modelName: "Diarie",
    }
  );

  // // !!! 별칭 처리 하기 위해서 이부분 과 User model 의 association을 같이 설정 해줘야 한다
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  };
  Diarie.init({
    image: {
      type:DataTypes.STRING,
      allowNull :false
    },
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

  // // !!! 별칭 처리 하기 위해서 이부분 과 User model 의 association을 같이 설정 해줘야 한다 
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  // Diarie.associate = (models) => {
  //   Diarie.belongsTo(models.User, {
  //     // onDelete : 'cascade',
  //     as: 'U',
  //     foreignKey : 'userId'
  //   })
  // }

  return Diarie;
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
};
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
