'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Iznajmljenis', [
      {
        datumIsteka: '2023-2-2',
        sezonaId: 1,
        korisnikId: 3
      },
      {
        datumIsteka: '2023-3-2',
        filmId: 1,
        korisnikId: 3
      },
      {
        datumIsteka: '2023-4-5',
        sezonaId: 2,
        korisnikId: 3
      },
      {
        datumIsteka: '2023-5-5',
        filmId: 2,
        korisnikId: 4
      },
      {
        datumIsteka: '2023-2-3',
        sezonaId: 3,
        korisnikId: 4
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Iznajmljenis', null, {});
  }
};
