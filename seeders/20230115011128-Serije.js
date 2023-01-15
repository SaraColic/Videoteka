'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Serijes', [
      {
        naziv: 'American Horror Story',
        opis: 'American Horror Story u prijevodu, Američka horror priča je serija autora i producenta Ryana Murphyja i Brada Falchuka. Serija se sastoji od (zasada) 10 sezona te svaka ima svoju priču. One jesu u jednu ruku povezane ako ih jako pozorno pratite. Svaka sezona ima oko 10 - 14 epizoda po trajanju od 45 minuta.',
        ocena: 8.1,
        direktorId: 4,
        zanrId: 2,
        glumacId: 4
      },
      {
        naziv: 'The 100',
        opis: 'Nuklearni armagedon poharao je Zemlju i izbrisao gotovo sve tragove života. Jedini preživjeli, sada su stanovnici 12 međunarodnih svemirskih postaja Zemljine orbite. Tri generacije poslije, točnije 97 godina nakon, oko 2000 ljudi nastanjuje postaje pod zajedničkim imenom – Ark',
        ocena: 7.7,
        direktorId: 5,
        zanrId: 5,
        glumacId: 4
      },
      {
        naziv: 'True Blood',
        opis: 'Radnja serije True Blood online sa prevodom (Okus krvi)smještena je u ne tako dalekoj budućnosti punoj romantike, napetosti, misterija i humora u izmišljeni gradić Bon Temps u državi Louisiani u kojem se događaju velike stvari!Diljem zemlje vampiri su “izašli iz lijesova” nakon izuma i masovne proizvodnje sintetičke krvi.',
        ocena: 7.6,
        direktorId: 6,
        zanrId: 2,
        glumacId: 4
      },
      {
        naziv: 'Six Feet Under',
        opis: 'Six Feet Under (Dva metra pod zemljom) kao najhvaljenija bizarna serija sa sedam osvojenih Emmyja (najviše odjednom osvojenih u historiji dodjela), tri Zlatna globusa i nominacijom za Grammy.',
        ocena: 8.1,
        direktorId: 6,
        zanrId: 2,
        glumacId: 5
      },
      {
        naziv: 'Tales from the Crypt',
        opis: 'Tales from the Crypt (Priče iz Kripte) jedna je od najuspješnijih HBO-ovih serija svih vremena, snimljena je po istoimenom stripu i obrađuje 93 horror priče kroz svojih 7 sezona.',
        ocena: 8,
        direktorId: 7,
        zanrId: 5,
        glumacId: 6
      }
    ], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Serijes', null, {});
  }
};
