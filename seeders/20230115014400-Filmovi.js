'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Filmovis', [
      {
        naziv: 'Hocus Pocus 2',
        opis: 'Tri mlade žene nenamerno prizivaju tri ozloglašene veštice u sadašnji Salem. Sada moraju da otkriju kako da ih zaustva pre nego što prouzrokuju totalni haos širom sveta...',
        tip: 'film',
        video: 'https://www.youtube.com/embed/idc0EOmKr30',
        img: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/15/0dd1fc0adad992bf40b6d0d4666c24b2_original.jpg?t=1626147937',
        ocena: 8,
        trajanje: '1h 43m',
        godina: '2022',
        cena: 500,
        besplatan: false,
        direktorId: 1,
        glumacId: 1,
        zanrId: 1
        
      },
      {
        naziv: 'The Proposal',
        opis: 'Margaret (Sandra Bullock) je žena-zmaj, u izdavačkoj kući gdje radi kao šefica znana pod nadimkom Vještica. Andrew (Ryan Reynolds) je njezin pomoćnik koji trpi tiraniju strpljivo čekajući svoju priliku za napredovanje, koja se ukaže kad Kanađanki Margaret zbog nepoštivanja pravila bude uskraćena viza. Jedini način da ostane u Sjedinjenim Državama je udaja, pa Andrew nenadano postaje mladoženja.',
        tip: 'film',
        video: 'https://www.youtube.com/embed/Z2lYA7L7PZY',
        img: 'https://i.pinimg.com/originals/48/33/6f/48336fb55a07bf492db466469d07c150.jpg',
        ocena: 7,
        trajanje: '1h 48m',
        godina: '2009',
        cena: 800,
        besplatan: false,
        direktorId: 1,
        glumacId: 1,
        zanrId: 4
      },
      {
        naziv: 'The Dictator',
        opis: 'Sacha Baron Cohen glumi Aladeena - bogatog, okrutnog i nemilosrdnog diktatora kojeg u tajnosti na čelu države zamijeni neuki pastir koza. Diktator tada napušta svoju funkciju te kreće u New York u potrazi za novim smislom života. U toj herojskoj priči on riskira svoj život kako bi osigurao da demokracija nikada ne dođe u zemlju koju s tolikom ljubavi ugnjetava.',
        tip: 'film',
        video: 'https://www.youtube.com/embed/MFsNeR1aJx0',
        img: 'https://image.tmdb.org/t/p/original/yn0y5Du5BViP33JP1W2RLuOwdhG.jpg',
        ocena: 9.5,
        trajanje: '1h 23m',
        godina: '2012',
        cena: 600,
        besplatan: false,
        direktorId: 3,
        glumacId: 1,
        zanrId: 1
      },
      {
        naziv: 'The Insider',
        opis: 'The Insider priča istinitu priču o 60-minutnoj televizijskoj seriji koja razotkriva duhansku industriju, viđenu očima pravog duvanskog direktora, Jeffreyja Wiganda.',
        tip: 'film',
        video: 'https://www.youtube.com/embed/5rkvxi5hdbA',
        img: 'https://images03.kaleidescape.com/transformed/covers/1134x1624s/221/22184914.jpg',
        ocena: 7.5,
        trajanje: '2h 38m',
        godina: '1999',
        besplatan: true,
        direktorId: 3,
        glumacId: 1,
        zanrId: 2
      },
      {
        naziv: 'The Recruit',
        opis: 'Kad mladi James Clayton (C. Farrell) demonstrira mogućnosti svog kompjutorskog programa, iskusni agent CIA-e, Walter Burke (A. Pacino), lovac na talente pokušava ga nagovoriti da se priključi programu obuke za vrhunske agente. Clayton ga odbije, ali kad Burke spomene njegova oca, predomisli se, očekujući da će od Burkea doznati kako mu je otac nastradao desetak godina ranije u Peruu.',
        tip: 'film',
        video: 'https://www.youtube.com/embed/dT0kexzmU7A',
        img: 'https://moviemanjackson.files.wordpress.com/2014/03/the-recruit-movie-poster.jpg',
        ocena: 6.4,
        trajanje: '1h 55m',
        godina: '2003',
        cena: 200,
        besplatan: false,
        direktorId: 3,
        glumacId: 1,
        zanrId: 5
      },
      {
        naziv: 'The Devil Wears Prada',
        opis: 'Jedan od najpopularnijih filmova čije citate još uvijek koristimo za opis situacija u svakodnevnom životu, zasigurno je “Đavo nosi Pradu” s Anne Hathaway i Meryl Streep u glavnim ulogama. To je bezvremenska priča o ženskoj snazi, transformaciji i nemilosrdnom svijetu biznisa koja je mnogima od nas otvorila neke druge perspektive.',
        tip: 'film',
        video: 'https://www.youtube.com/embed/6ZOZwUQKu3E',
        img: 'https://image.tmdb.org/t/p/original/u6QBDGUCOEMRekna95ip2MxplbQ.jpg',
        ocena: 7.1,
        trajanje: '1h 49m',
        godina: '2006',
        besplatan: true,
        direktorId: 3,
        glumacId: 1,
        zanrId: 5
      },
      {
        naziv: 'The Invisible Guest',
        opis: 'Tema ovog spanskog trilera vrti se oko hockokovsko-rasomonske zavrzlame o zaveri cutanja i prikrivanja dokaza pocinjene zlocine, koja ce se kroz niz dogadjaju razviti u nesto sasvim drugacije i neocekivano za predvideti',
        tip: 'film',
        video: 'https://www.youtube.com/embed/Fo6-sfYjn1s',
        img: 'https://noescinetodoloquereluce.com/wp-content/uploads/2017/01/jRvqaCw9STOcO3W3i55cl3D5Tem.jpg',
        ocena: 8.2,
        trajanje: '1h 22m',
        godina: '2011',
        besplatan: false,
        cena: 800,
        direktorId: 3,
        glumacId: 1,
        zanrId: 5
      },
      {
        naziv: 'I Origins',
        opis: 'Molekularni biolog i njegov partner u laboratoriji otkrivaju dokaze koji mogu fundamentalno da promene drustvo kakvo poznajemo',
        tip: 'film',
        video: 'https://www.youtube.com/embed/BrxQjd5gpuk',
        img: 'https://nettv4u.com/uploads/i-origins-movie-review.jpg',
        ocena: 7.3,
        trajanje: '1h 57m',
        godina: '2014',
        besplatan: true,
        direktorId: 3,
        glumacId: 1,
        zanrId: 5
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Filmovis', null, {});
  }
};
