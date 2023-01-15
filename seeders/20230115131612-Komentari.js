'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Komentaris', [
      {
        tekst: 'John',
        filmId: 3,
        korisnikId: 3
      },
      {
        tekst: 'sxtgdg',
        epizodaId: 2,
        korisnikId: 3
      },
      {
        tekst: 'Josdxmgrhn',
        filmId: 1,
        korisnikId: 3
      },
      {
        tekst: 'smet',
        epizodaId: 1,
        korisnikId: 3
      },
      {
        tekst: 'ftu,f,uf',
        filmId: 1,
        korisnikId: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Komentaris', null, {});
  }
};
