
'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return  queryInterface.createTable('Diarieshashtags', {
      diarieId :{
        type : DataTypes.INTEGER,
        references:{
          model : 'Diaries',
          key : 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      hashtagId :{
        type : DataTypes.INTEGER,
        references:{
          model : 'Hashtags',
          key : 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      }
    })
    .then( () => 
      queryInterface.addIndex('Diarieshashtags', ['diarieId','hashtagId'], { unique : true })
    )
  },
  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Diarieshashtags');
  }
};