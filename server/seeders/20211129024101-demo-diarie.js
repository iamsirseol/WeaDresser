'use strict';

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
    //  const diarieData = [
    //   {
    //     id:1,
    //     image:"image1",
    //     content:"content1",
    //     weather:"맑음",
    //     temp: 10.0,
    //     tempMax: 12.0,
    //     tempMin: 0.1, 
    //     userId: 1, 
    //     share:false,
    //   }, 
    //   {
    //     id:2,
    //     image:"iamge2",
    //     content:"content2",
    //     weather:"흐림",
    //     temp: 5.0,
    //     tempMax: 7.3,
    //     tempMin: -3.2, 
    //     userId: 2, 
    //     share:false,
    //   }
    // ]
    //  return queryInterface.bulkInsert('Diaries', diarieData);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //  return queryInterface.bulkDelete('Diaries', null, {});

  }
};
