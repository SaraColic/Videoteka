'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('glumiufilmus', [
      {
        filmID: 1,
        glumacID: 2
      },
      {
        filmID: 2,
        glumacID: 1
      },
      {
        filmID: 2,
        glumacID: 3
      },
      {
        filmID: 3,
        glumacID: 4
      },
      {
        filmID: 3,
        glumacID: 6
      },
      {
        filmID: 4,
        glumacID: 5
      },
      {
        filmID: 5,
        glumacID: 6
      },
      {
        filmID: 5,
        glumacID: 7
      },
      {
        filmID: 5,
        glumacID: 8
      },
      {
        filmID: 6,
        glumacID: 9
      },
      {
        filmID: 7,
        glumacID: 10
      },
      {
        filmID: 7,
        glumacID: 11
      },
      {
        filmID: 8,
        glumacID: 12
      },
      {
        filmID: 8,
        glumacID: 13
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('glumiufilmus', null, {});
  }
};
