'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    // field 추가

    // foreign key 연결
    await queryInterface.addConstraint('Diaries', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'diary-userId',
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeConstraint('Diaries', 'diary-userId');
  }
};