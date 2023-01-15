'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Epizodes', [
      {
        naziv: '1',
        opis: '',
        video: 'https://hqq.to/e/enNEUjNvbi9SL005K1JoRE5zOENzdz09',
        sezonaId: 1
      },
      {
        naziv: '2',
        opis: '',
        video: 'https://hqq.to/e/ZzR6TUJ2bkJTeERkcjF5VlMzenArdz09',
        sezonaId: 1
      },
      {
        naziv: '3',
        opis: '',
        video: 'https://hqq.to/e/dUgyVzZxUkZDR0dHVXNkUEtMdXMrdz09',
        sezonaId: 1
      },
      {
        naziv: '4',
        opis: '',
        video: 'https://hqq.to/e/L0JuSWpWZmNoWG0rUXdQditmdXRidz09',
        sezonaId: 1
      },
      {
        naziv: '5',
        opis: '',
        video: 'https://hqq.to/e/bzV0THpnVG9UWTJwWi83VTJPWnFCdz09',
        sezonaId: 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Epizodes', null, {});
  }
};
