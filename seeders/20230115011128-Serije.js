'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Serijes', [
      {
        naziv: 'American Horror Story',
        opis: 'American Horror Story u prijevodu, Američka horror priča je serija autora i producenta Ryana Murphyja i Brada Falchuka. Serija se sastoji od (zasada) 10 sezona te svaka ima svoju priču. One jesu u jednu ruku povezane ako ih jako pozorno pratite. Svaka sezona ima oko 10 - 14 epizoda po trajanju od 45 minuta.',
        tip: 'serija',
        ocena: 8.1,
        img: 'https://vignette.wikia.nocookie.net/tvdatabase/images/4/42/American_Horror_Story_-_The_Complete_First_Season_-_DVD.jpg/revision/latest?cb=20121209182416',
        direktorId: 4,
        godina: '2012',
        cena: 800,
        besplatan: false,
        glumacId: 1,
        zanrId: 2
      },
      {
        naziv: 'The 100',
        opis: 'Nuklearni armagedon poharao je Zemlju i izbrisao gotovo sve tragove života. Jedini preživjeli, sada su stanovnici 12 međunarodnih svemirskih postaja Zemljine orbite. Tri generacije poslije, točnije 97 godina nakon, oko 2000 ljudi nastanjuje postaje pod zajedničkim imenom – Ark',
        tip: 'serija',
        ocena: 7.7,
        img: 'https://media.moddb.com/images/mods/1/31/30364/the-100-53772df520798.jpg',
        direktorId: 5,
        godina: '2018',
        besplatan: true,
        glumacId: 1,
        zanrId: 5
      },
      {
        naziv: 'True Blood',
        opis: 'Radnja serije True Blood online sa prevodom (Okus krvi)smještena je u ne tako dalekoj budućnosti punoj romantike, napetosti, misterija i humora u izmišljeni gradić Bon Temps u državi Louisiani u kojem se događaju velike stvari!Diljem zemlje vampiri su “izašli iz lijesova” nakon izuma i masovne proizvodnje sintetičke krvi.',
        tip: 'serija',
        ocena: 7.6,
        img: 'https://1.bp.blogspot.com/-MU2AFq02L0U/Ta5z4vZFfTI/AAAAAAAAA5M/mozllmPUlfU/s1600/taraSam-True-Blood-Poster.jpg',
        direktorId: 6,
        godina: '2020',
        cena: 400,
        besplatan: false,
        glumacId: 1,
        zanrId: 2
      },
      {
        naziv: 'Six Feet Under',
        opis: 'Six Feet Under (Dva metra pod zemljom) kao najhvaljenija bizarna serija sa sedam osvojenih Emmyja (najviše odjednom osvojenih u historiji dodjela), tri Zlatna globusa i nominacijom za Grammy.',
        tip: 'serija',
        ocena: 8.1,
        img: 'https://i.ebayimg.com/images/g/9HIAAOxyuPtQ9zUg/s-l500.jpg',
        direktorId: 6,
        godina: '2015',
        cena: 650,
        besplatan: false,
        glumacId: 1,
        zanrId: 2
      },
      {
        naziv: 'Tales from the Crypt',
        opis: 'Tales from the Crypt (Priče iz Kripte) jedna je od najuspješnijih HBO-ovih serija svih vremena, snimljena je po istoimenom stripu i obrađuje 93 horror priče kroz svojih 7 sezona.',
        tip: 'serija',
        ocena: 8,
        img: 'https://image.tmdb.org/t/p/original/dDfXQH6Kg2JNASI0dqNALukjhk1.jpg',
        direktorId: 7,
        godina: '2019',
        besplatan: true,
        glumacId: 1,
        zanrId: 5
      },
      {
        naziv: 'Kaleidoscope',
        opis: 'Vrhunski lopov i njegova ekipa pokušaju izvesti složenu, veličanstvenu pljačku sedam milijardi dolara... ali plan bi im mogli uništiti izdaje, pohlepa i druge prijetnje.',
        tip: 'serija',
        ocena: 8.5,
        img: 'https://catimage.net/images/2023/01/01/Kaleidoscope-Season-1-Hindi-Dubbed-Netflix-Series.jpg',
        direktorId: 7,
        godina: '2022',
        cena: 720,
        besplatan: false,
        glumacId: 1,
        zanrId: 5
      }

    ], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Serijes', null, {});
  }
};
