'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Sezones', [
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 1
      },
      {
        naziv: 'Sezona 2',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 1
      },
      {
        naziv: 'Sezona 3',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 1
      },
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 2
      },
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 3
      },
      {
        naziv: 'Sezona 2',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 3
      },
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 4
      },
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 5
      },
      {
        naziv: 'Sezona 2',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 5
      },
      {
        naziv: 'Sezona 3',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 5
      },
      {
        naziv: 'Sezona 1',
        opis: '',
        ocena: 1,
        cena: 200,
        serijaId: 6
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Sezones', null, {});
  }
};
