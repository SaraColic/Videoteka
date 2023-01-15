'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Direktors', [
      {
       ime: 'Anne',
       prezime: "Fletcher"
      },
      {
       ime: 'Eva',
       prezime: "Cabrera"
      },
      {
       ime: 'Jeff',
       prezime: "Authors"
      },
      {
       ime: 'Brad',
       prezime: "Falchuk"
      },
      {
       ime: 'Jason',
       prezime: "Rothenberg"
      },
      {
       ime: 'Alan',
       prezime: "Ball"
      },
      {
       ime: 'Steven',
       prezime: "Ball"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Direktors', null, {});

  }
};
