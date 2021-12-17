'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    // field 추가

    // foreign key 연결
    await queryInterface.addConstraint('Likes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'like-userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    // foreign key 연결
    await queryInterface.addConstraint('Likes', {
      fields: ['diarieId'],
      type: 'foreign key',
      name: 'like-diarieId',
      references: {
        table: 'diaries',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeConstraint('Likes', 'userId');
    await queryInterface.removeConstraint('Likes', 'diarieId');
  }
};