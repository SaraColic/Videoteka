'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Epizodes', [
      {
        naziv: '1',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '2',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '3',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '4',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '5',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '6',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '7',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '8',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '9',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 1
      },
      {
        naziv: '1',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 2
      },
      {
        naziv: '2',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 2
      },
      {
        naziv: '3',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 2
      },
      {
        naziv: '4',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 2
      },
      {
        naziv: '5',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 2
      },
      {
        naziv: '1',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 3
      },
      {
        naziv: '2',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 3
      },
      {
        naziv: '3',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 3
      },
      {
        naziv: '4',
        opis: '',
        img: 'https://i.redd.it/bds763n51sz41.jpg',
        video: 'https://www.youtube.com/embed/aDrsItJ_HU4',
        sezonaId: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Epizodes', null, {});
  }
};
