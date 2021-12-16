'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    return  queryInterface.createTable('DiariesHashtags', {
      diarieId: {
        type: DataTypes.INTEGER,
        references:{
          model : 'Diaries',
          key : 'id',
          onDelete: 'CASCADE',
        }
      },
      hashtagId :{
        type: DataTypes.INTEGER,
        references:{
          model : 'Hashtags',
          key : 'id',
          onDelete: 'CASCADE',
        }
      },
    })
  },
  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('DiariesHashtags');
  }
};