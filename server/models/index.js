'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const user = require('./user');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
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
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// const { Diarie,  User, Like, Hashtags } = sequelize.models;
// User.hasMany(Diarie, { as : 'diaries', foreignKey : 'userId' } );
// Diarie.belongsTo(User, { as :'users', foreignKey : 'userId' });

// User.hasMany(Like, { as : 'like-user', foreignKey : 'userId' });
// Like.belongsTo(User, {as : 'user-like', foreignKey : 'userId' })

// Diarie.hasMany(Like, { as : 'like-diary', foreignKey : 'diarieId' });
// Like.belongsTo(Diarie, { as : 'diary-like', foreignKey : 'diarieId' });

// // User.belongsToMany(Diarie, { through : 'Likes', as :'LD'},);
// Diarie.belongsToMany(Hashtag, { 
//     through : 'DiariesHashtags', as :'hashtag-diary', 
//     uniqueKey : false, 
// });

// Hashtag.belongsToMany(Diarie, { 
//   through : 'DiariesHashtags', as :'diary-hashtag', 
//   uniqueKey : false, 
//  });

// foreignKey : 'diariesId' 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
