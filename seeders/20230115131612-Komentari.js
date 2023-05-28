'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Komentaris', [
      {
        tekst: 'Odlicnoo',
        epizodaId: 2,
        filmId: 1,
        korisnikId: 3
      },
      {
        tekst: 'Nije mi se svidio',
        epizodaId: 2,
        filmId: 2,
        korisnikId: 3
      },
      {
        tekst: 'Super , cool!',
        epizodaId: 1,
        filmId: 2,
        korisnikId: 3
      },
      {
        tekst: 'Dosadno, gledala sam bolje',
        epizodaId: 1,
        filmId: 3,
        korisnikId: 4
      },
      {
        tekst: 'Odlicno',
        epizodaId: 3,
        filmId: 3,
        korisnikId: 4
      },
      {
        tekst: 'Nije mi se svidelo',
        epizodaId: 4,
        filmId: 3,
        korisnikId: 4
      },
      {
        tekst: 'Super je',
        epizodaId: 5,
        filmId: 4,
        korisnikId: 4
      },
      {
        tekst: 'Odlicnoo, mnogo mi se svidja',
        epizodaId: 5,
        filmId: 5,
        korisnikId: 3
      },
      {
        tekst: 'Nije mi se svidio',
        epizodaId: 6,
        filmId: 5,
        korisnikId: 5
      },
      {
        tekst: 'Superrrr!',
        epizodaId: 6,
        filmId: 6,
        korisnikId: 5
      },
      {
        tekst: 'Odusevljena sam!',
        epizodaId: 7,
        filmId: 2,
        korisnikId: 5
      },
      {
        tekst: 'Dosadno, gledao sam bolje',
        epizodaId: 8,
        filmId: 6,
        korisnikId: 5
      },
      {
        tekst: 'Dosadno, gledao sam bolje',
        epizodaId: 8,
        filmId: 7,
        korisnikId: 5
      },
      {
        tekst: 'Bezveze',
        epizodaId: 9,
        filmId: 8,
        korisnikId: 5
      },
      {
        tekst: 'Mnogo dobri glumci !',
        epizodaId: 1,
        filmId: 8,
        korisnikId: 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Komentaris', null, {});
  }
};
