<<<<<<< HEAD
<<<<<<< HEAD
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
<<<<<<< HEAD
<<<<<<< HEAD
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
const { User, Diarie, DiariesHashtag, Post, Like, Hashtag } = sequelize.models;

// ! user-diarie 조인 할때, 별칭 처리 해결이 안되면 이부분을 model 에 정의해서 사용해야 할듯
// User 1 : N  Diarie
User.hasMany(Diarie, { foreignKey: "userId", sourceKey: "id" });
Diarie.belongsTo(User, { foreignKey: "userId", as: "U", sourceKey: "id" });

// User 1 : N  Like
User.hasMany(Like, { foreignKey: "userId", sourceKey: "id" });
Like.belongsTo(User, { foreignKey: "userId", sourceKey: "id" });

// Diarie 1 : N  Like
Diarie.hasMany(Like, { foreignKey: "diariesId", sourceKey: "id" });
Like.belongsTo(Diarie, { foreignKey: "diariesId", sourceKey: "id" });

// * Diarie  N: M  Hashtag
// Diarie 1 : N  DiariesHashtag
Diarie.hasMany(DiariesHashtag, { foreignKey: "diariesId", sourceKey: "id" });
DiariesHashtag.belongsTo(Diarie, { foreignKey: "diariesId", sourceKey: "id" });

// Hashtag 1 : N  DiariesHashtag
Hashtag.hasMany(DiariesHashtag, { foreignKey: "hashtagsId", sourceKey: "id" });
DiariesHashtag.belongsTo(Hashtag, {
  foreignKey: "hashtagsId",
  sourceKey: "id",
});
=======
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
const {
  User,
  Diarie,
  DiariesHashtag,
  Post,
  Like,
  Hashtag,

} = sequelize.models;

// ! user-diarie 조인 할때, 별칭 처리 해결이 안되면 이부분을 model 에 정의해서 사용해야 할듯
// User 1 : N  Diarie
User.hasMany(Diarie, { foreignKey: 'userId', sourceKey : 'id' });
Diarie.belongsTo(User, { foreignKey: 'userId', as:'U', sourceKey : 'id'});

// User 1 : N  Like
User.hasMany(Like, { foreignKey: 'userId', sourceKey : 'id' });
Like.belongsTo(User, { foreignKey: 'userId' , sourceKey : 'id'});

// Diarie 1 : N  Like
Diarie.hasMany(Like, { foreignKey: 'diariesId', sourceKey : 'id' });
Like.belongsTo(Diarie, { foreignKey: 'diariesId' , sourceKey : 'id'});

// * Diarie  N: M  Hashtag
// Diarie 1 : N  DiariesHashtag 
Diarie.hasMany(DiariesHashtag, { foreignKey: 'diariesId', sourceKey : 'id' });
DiariesHashtag.belongsTo(Diarie, { foreignKey: 'diariesId' , sourceKey : 'id'});

// Hashtag 1 : N  DiariesHashtag 
Hashtag.hasMany(DiariesHashtag, { foreignKey: 'hashtagsId', sourceKey : 'id' });
DiariesHashtag.belongsTo(Hashtag, { foreignKey: 'hashtagsId' , sourceKey : 'id'});
<<<<<<< HEAD
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82
=======
>>>>>>> a7d5c121d0a8fc3d3e411f595c141538c0463a82

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
