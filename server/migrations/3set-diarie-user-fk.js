'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    // field 추가
    await queryInterface.addColumn('Diaries', 'userId', DataTypes.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('Diaries', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'diary-userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });

  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.removeConstraint('Diaries', 'diary-userId');
    await queryInterface.removeColumn('Diaries', 'userId');
  }
};