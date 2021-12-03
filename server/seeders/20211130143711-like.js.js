"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const likeData = [
      {
        userId: 1,
        diaresId: 2,
      },
      {
        userId: 1,
        diaresId: 2,
      },
    ];
    return queryInterface.bulkInsert("Likes", likeData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
