const express = require('express');
const { sequelize } = require('./models');
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

const app = express();

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
  
    if (token == null) return res.redirect(301, '/login');

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.redirect(301, '/login');
        console.log(user.tip);
        if(user.tip == 2){
            res.cookie = `token=;SameSite=Lax`;
            res.redirect(301, '/login');
        }

        req.user = user;
    
        next();
    });
}

app.get('/', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});


app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});

app.get('/admin', authToken, (req, res) => {
    res.sendFile('index.html', { root: './static' });
});

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('public'));
app.listen({ port: 8002 }, async () => {
    await sequelize.authenticate();
});