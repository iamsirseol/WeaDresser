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
    const userData = [
      { 
        id : 1,
        userName : "minchan jung",
        email : "minchan@eamil.com",
        password: "1234",
        gender: "male",
        social:false,
      }, 
      {
        id : 2,
        userName : "younghan son",
        email : "younghan@eamil.com",
        password: "1234",
        gender: "male",
        social:false,
      }
    ]
     return queryInterface.bulkInsert('Users', userData);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
