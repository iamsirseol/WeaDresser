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
    const postData = [
      {
        id: 1,
        postsImage: "image1",
        name: "여름옷",
        like: 3,
      },
      {
        id: 2,
        postsImage: "image2",
        name: "겨울옷",
        like: 5,
      },
    ];
    return queryInterface.bulkInsert("Posts", postData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
