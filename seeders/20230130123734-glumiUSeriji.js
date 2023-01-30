'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('glumiuserijis', [
      {
        serijaID: 2,
        glumacID: 6
      },
      {
        serijaID: 4,
        glumacID: 4
      },
      {
        serijaID: 5,
        glumacID: 1
      },
      {
        serijaID: 1,
        glumacID: 2
      },
      {
        serijaID: 3,
        glumacID: 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('glumiufilmus', null, {});
  }
};
