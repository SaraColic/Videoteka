'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Korisnicis', [
      {
        ime: 'admin',
        prezime: 'admin',
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10),
        email: 'admin@gmail.com',
        tip: 0
      },
      {
        ime: 'zaposleni',
        prezime: 'zaposleni',
        username: 'zaposleni',
        password: bcrypt.hashSync('zaposleni123', 10),
        email: 'zaposleni@gmail.com',
        tip: 1
      },
      {
        ime: 'sara',
        prezime: 'colic',
        username: 'sara',
        password: bcrypt.hashSync('sara123', 10),
        email: 'sara@gmail.com',
        tip: 2
      },
      {
        ime: 'petar',
        prezime: 'prvulovic',
        username: 'petar',
        password: bcrypt.hashSync('prtar123', 10),
        email: 'petar@gmail.com',
        tip: 2
      },
      {
        ime: 'milos',
        prezime: 'milic',
        username: 'misa',
        password: bcrypt.hashSync('misa123', 10),
        email: 'misa@gmail.com',
        tip: 2
      },
    ], {});
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Korisnicis', null, {});
  }
};
