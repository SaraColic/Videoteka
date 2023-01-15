'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Zanrovis', [
      {
        naziv: 'komedija',
        opis: 'Komedija je filmski žanr čiji je osnovni zadatak da izazove smijeh kod publike. Ona se bavi smiješnim ljudskim karakterima, osobinama i situacijama, i usmjerena je na ismijavanje čovjekovih mana i slabosti, kao i negativnih pojava u društvu i životu.'
      },
      {
        naziv: 'drama',
        opis: 'Drama je filmski žanr koji najviše zavisi o unutrašnjem razvoju stvarnih likova koji se suočavaju s emocionalnim temama.'
      },
      {
        naziv: 'horor',
        opis: 'Horor je žanr fantastike koji je namenjen da uplaši ili zgrozi svoje gledaoce izazivajući osećaje strave i užasa.'
      },
      {
        naziv: 'romansa',
        opis: 'Romantični film ili ljubavni film je filmski žanr koji je fokusiran na strast, emocije i odnos privrženosti između glavnih likova.'
      },
      {
        naziv: 'akcija',
        opis: 'Akcioni film, ili samo akcija, je filmski žanr u kome akcione sekvence, poput borbe, kaskaderskih scena, automobilskih potera ili eksplozija, imaju prednost pred elementima kao što su karakterizacija ili kompleksna priča.'
      },

    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Zanrovis', null, {});
    
  }
};
