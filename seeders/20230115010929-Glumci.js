'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Glumcis', [
      {
        ime: 'Sandra Bullock',
        prezime: 'Torres'
      },
      {
        ime: 'Bette Midler',
        prezime: 'Torres'
      },
      {
        ime: 'Ryan Reynolds',
        prezime: 'Torres'
      },
      {
        ime: 'Aasif Mandvi',
        prezime: 'Mandvi'
      },
      {
        ime: 'Al Pacino',
        prezime: 'Pacino'
      },
      {
        ime: 'Adina Porter',
        prezime: 'Porter'
      },
      {
        ime: 'Frances Conroy',
        prezime: 'Conroy'
      },
      {
        ime: 'John Kassir',
        prezime: 'Kassir'
      },
      {
        ime: 'Meryl Streep',
        prezime: 'Kassir'
      },
      {
        ime: 'Mario Casas',
        prezime: 'Kassir'
      },
      {
        ime: 'Jose Coronado',
        prezime: 'Kassir'
      },
      {
        ime: 'Michael Pitt',
        prezime: 'Kassir'
      },
      {
        ime: 'Brit Marling',
        prezime: 'Kassir'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Glumcis', null, {});
  }
};
