'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('glumiufilmus', [
      {
        filmID: 3,
        glumacID: 6
      },
      {
        filmID: 2,
        glumacID: 4
      },
      {
        filmID: 5,
        glumacID: 1
      },
      {
        filmID: 4,
        glumacID: 2
      },
      {
        filmID: 1,
        glumacID: 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('glumiufilmus', null, {});
  }
};
