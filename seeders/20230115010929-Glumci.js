'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Glumcis', [
      {
        ime: 'Aiden',
        prezime: 'Torres'
      },
      {
        ime: 'Aasif',
        prezime: 'Mandvi'
      },
      {
        ime: 'Al',
        prezime: 'Pacino'
      },
      {
        ime: 'Adina',
        prezime: 'Porter'
      },
      {
        ime: 'Frances',
        prezime: 'Conroy'
      },
      {
        ime: 'John',
        prezime: 'Kassir'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Glumcis', null, {});
  }
};
