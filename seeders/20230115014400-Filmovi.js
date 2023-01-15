'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Filmovis', [
      {
        naziv: 'Hocus Pocus 2',
        opis: 'Tri mlade žene nenamerno prizivaju tri ozloglašene veštice u sadašnji Salem. Sada moraju da otkriju kako da ih zaustva pre nego što prouzrokuju totalni haos širom sveta...',
        video: 'https://hqq.to/e/SUxsK0JGNlduaG9jV2FwaVgxWTZtdz09',
        ocena: 8,
        cena: 500,
        besplatan: false,
        direktorId: 1,
        glumacId: 1,
        zanrId: 1
      },
      {
        naziv: 'The Proposal',
        opis: 'Margaret (Sandra Bullock) je žena-zmaj, u izdavačkoj kući gdje radi kao šefica znana pod nadimkom Vještica. Andrew (Ryan Reynolds) je njezin pomoćnik koji trpi tiraniju strpljivo čekajući svoju priliku za napredovanje, koja se ukaže kad Kanađanki Margaret zbog nepoštivanja pravila bude uskraćena viza. Jedini način da ostane u Sjedinjenim Državama je udaja, pa Andrew nenadano postaje mladoženja.',
        video: 'https://hqq.to/e/UEVELzlCZmZtZjVWanFNTlJVRndMUT09',
        ocena: 7,
        cena: 800,
        besplatan: false,
        direktorId: 1,
        glumacId: 2,
        zanrId: 4
      },
      {
        naziv: 'The Dictator',
        opis: 'Sacha Baron Cohen glumi Aladeena - bogatog, okrutnog i nemilosrdnog diktatora kojeg u tajnosti na čelu države zamijeni neuki pastir koza. Diktator tada napušta svoju funkciju te kreće u New York u potrazi za novim smislom života. U toj herojskoj priči on riskira svoj život kako bi osigurao da demokracija nikada ne dođe u zemlju koju s tolikom ljubavi ugnjetava.',
        video: 'https://hqq.to/e/YytIcC9OWmM0bTA4eG55R2JvL0xJQT09',
        ocena: 9.5,
        cena: 600,
        besplatan: false,
        direktorId: 3,
        glumacId: 2,
        zanrId: 1
      },
      {
        naziv: 'The Insider',
        opis: 'The Insider priča istinitu priču o 60-minutnoj televizijskoj seriji koja razotkriva duhansku industriju, viđenu očima pravog duvanskog direktora, Jeffreyja Wiganda.',
        video: 'https://hqq.to/e/eHNJajFUZktwUVZZaGg1WHBrWlV2Zz09',
        ocena: 7.5,
        besplatan: true,
        direktorId: 3,
        glumacId: 3,
        zanrId: 2
      },
      {
        naziv: 'The Recruit',
        opis: 'Kad mladi James Clayton (C. Farrell) demonstrira mogućnosti svog kompjutorskog programa, iskusni agent CIA-e, Walter Burke (A. Pacino), lovac na talente pokušava ga nagovoriti da se priključi programu obuke za vrhunske agente. Clayton ga odbije, ali kad Burke spomene njegova oca, predomisli se, očekujući da će od Burkea doznati kako mu je otac nastradao desetak godina ranije u Peruu.',
        video: 'https://hqq.to/e/bnlCYmdKcVIrWXRFNTdSSVBrT1dyUT09',
        ocena: 6.4,
        cena: 200,
        besplatan: false,
        direktorId: 3,
        glumacId: 3,
        zanrId: 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Filmovis', null, {});
  }
};
