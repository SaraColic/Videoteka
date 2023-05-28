'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('glumiuserijis', [
      {
        serijaID: 1,
        glumacID: 5
      },
      {
        serijaID: 1,
        glumacID: 6
      },
      {
        serijaID: 2,
        glumacID: 4
      },
      {
        serijaID: 2,
        glumacID: 11
      },
      {
        serijaID: 2,
        glumacID: 12
      },
      {
        serijaID: 3,
        glumacID: 13
      },
      {
        serijaID: 3,
        glumacID: 2
      },
      {
        serijaID: 4,
        glumacID: 6
      },
      {
        serijaID: 5,
        glumacID: 7
      },
      {
        serijaID: 5,
        glumacID: 11
      },
      {
        serijaID: 6,
        glumacID: 13
      },
      {
        serijaID: 6,
        glumacID: 8
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('glumiufilmus', null, {});
  }
};
