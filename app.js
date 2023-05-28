const express = require('express');
const { sequelize, Komentari } = require('./models');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const direktori = require('./routes/direktori');
const epizode = require('./routes/epizode');
const filmovi = require('./routes/filmovi');
const glumci = require('./routes/glumci');
const iznajmljeni = require('./routes/iznajmljeni');
const komentari = require('./routes/komentari');
const korisnici = require('./routes/korisnici');
const serije = require('./routes/serije');
const sezone = require('./routes/sezone');
const zanrovi = require('./routes/zanrovi');
// const cors = require('cors');

const http = require('http');
// const { Server } = require("socket.io");

const history = require('connect-history-api-fallback');


const app = express();
const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         credentials: true
//     },
//     allowEIO3: true
// });
// var corsOptions = {
//     origin: '',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));

app.use('/admin/direktori', direktori);
app.use('/admin/epizode', epizode);
app.use('/admin/filmovi', filmovi);
app.use('/admin/glumci', glumci);
app.use('/admin/iznajmljeni', iznajmljeni);
app.use('/admin/komentari', komentari);
app.use('/admin/korisnici', korisnici);
app.use('/admin/serije', serije);
app.use('/admin/sezone', sezone);
app.use('/admin/zanrovi', zanrovi);

function getCookies(req) {
    if (req.headers.cookie == null) return {};

    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });

    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
  
    if (token == null) return res.redirect(301, '/loginn');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/loginn');
        console.log(user.tip);
        if(user.tip == 2){
            res.cookie = `token=;SameSite=Lax`;
            res.redirect(301, '/loginn');
        }

        req.user = user;
    
        next();
    });
}
/*
app.get('/', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});
*/
app.get('/loginn', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});
app.get('/admin', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});
/*
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('public'));
*/


// function authSocket(msg, next) {
//     if (msg[1].token == null) {
//         next(new Error("Not authenticated"));
//     } else {
//         jwt.verify(msg[1].token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//             if (err) {
//                 next(new Error(err));
//             } else {
//                 msg[1].user = user;
//                 next();
//             }
//         });
//     }
// }


// io.on('connection', socket => {
//     socket.use(authSocket);
 
//     socket.on('komentar', msg => {
//         Komentari.create({ tekst: msg.tekst, filmId: msg.filmId, korisnikId: msg.korisnik.korisnikId })
//             .then( rows => {
//                 Komentari.findOne({ where: { id: rows.id }, include: ['korisnik'] })
//                     .then( msgg => io.emit('komentar', JSON.stringify(msgg)) ) 
//             }).catch( err => res.status(500).json(err) );
//     });

//     socket.on('error', err => socket.emit('error', err.message) );
// });


const staticMdl = express.static(path.join(__dirname, 'dist'));

app.use(staticMdl);

app.use(history({ index: '/index.html' }));

app.use(staticMdl);



app.listen({ port: 8002 }, async () => {
    await sequelize.authenticate();
});
