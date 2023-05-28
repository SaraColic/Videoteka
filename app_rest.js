const express = require("express");
const { sequelize, Zanrovi, Direktor, Glumci, Serije, Sezone, Epizode, Filmovi, Korisnici, Komentari, Iznajmljeni, glumiUFilmu, glumiUSeriji, Korpa, Sequelize } = require("./models");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Server } = require("socket.io");
const http = require('http');

const app = express();
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         credentials: true
//     },
//     allowEIO3: true
// });

var corsOptions = {
    origin: ['http://127.0.0.1:8002', 'http://localhost:8080'],
    optionsSuccessStatus: 200
}


app.use(express.json());
app.use(cors(corsOptions));

Seq = require('sequelize');
const Op = Seq.Op;

const Joi = require('joi');


function authToken(req, res, next){
    headers = req.rawHeaders;
    token = ""
    headers.forEach( header => {
        headerParam = header.split(' ');
        if(headerParam[0] == "Bearer" && headerParam.length == 2){
            token = headerParam[1];
        }
    })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, korisnik) => {
        if(err) return res.json({msg: "Nevalidni kredencijali"});

        req.korisnik = korisnik;

        next();
    });
}

function authAdmin(req, res, next){
    headers = req.rawHeaders;
    token = ""
    headers.forEach( header => {
        headerParam = header.split(' ');
        if(headerParam[0] == "Bearer" && headerParam.length == 2){
            token = headerParam[1];
        }
    })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, korisnik) => {
        if(err) return res.json({msg: "Nevalidni kredencijali"});

        if(korisnik.tip != 0) return res.json({msg: "Niste autorizovani"})

        next();
    });
};

function authZaposleni(req, res, next){
    headers = req.rawHeaders;
    token = ""
    headers.forEach( header => {
        headerParam = header.split(' ');
        if(headerParam[0] == "Bearer" && headerParam.length == 2){
            token = headerParam[1];
        }
    })

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, korisnik) => {
        if(err) return res.json({msg: "Nevalidni kredencijali"});

        if(korisnik.tip == 2) return res.json({msg: "Niste autorizovani"})

        next();
    });
};

// Zanrovi

app.get('/zanrovi', (req, res) => {
    Zanrovi.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/zanrovi/:id', (req, res) => {
    Zanrovi.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Zanr sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const zanroviSema = Joi.object().keys({
    naziv: Joi.string().trim().min(0).max(255).required(),
    opis: Joi.string().trim().min(0).max(10000).required()
})

app.post('/zanrovi', authZaposleni, (req, res) => {
    Joi.validate(req.body, zanroviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Zanrovi.create( {naziv: req.body.naziv, opis: req.body.opis} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/zanrovi/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, zanroviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Zanrovi.update( {naziv: req.body.naziv, opis: req.body.opis}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/zanrovi/:id', authZaposleni, (req, res) => {
    Zanrovi.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Direktori

app.get('/direktori', (req, res) => {
    Direktor.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/direktori/:id', (req, res) => {
    Direktor.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Direktor sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const direktoriSema = Joi.object().keys({
    ime: Joi.string().trim().min(0).max(255).required(),
    prezime: Joi.string().trim().min(0).max(255).required()
})

app.post('/direktori', authZaposleni, (req, res) => {
    Joi.validate(req.body, direktoriSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Direktor.create( {ime: req.body.ime, prezime: req.body.prezime} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/direktori/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, direktoriSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Direktor.update( {ime: req.body.ime, prezime: req.body.prezime}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/direktori/:id', authZaposleni, (req, res) => {
    Direktor.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Glumci

app.get('/glumci', (req, res) => {
    Glumci.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/glumci/:id', (req, res) => {
    Glumci.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Glumac sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const glumciSema = Joi.object().keys({
    ime: Joi.string().trim().min(0).max(255).required(),
    prezime: Joi.string().trim().min(0).max(255).required()
})

app.post('/glumci', authZaposleni, (req, res) => {
    Joi.validate(req.body, glumciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Glumci.create( {ime: req.body.ime, prezime: req.body.prezime} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/glumci/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, glumciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Glumci.update( {ime: req.body.ime, prezime: req.body.prezime}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/glumci/:id', authZaposleni, (req, res) => {
    Glumci.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Serije

app.get('/serije', (req, res) => {
    Serije.findAll({include: ['zanr', 'direktor', 'sezone']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/serije/search/:query', (req, res) => {
    Serije.findAll({include: ['zanr', 'direktor'], where: {naziv:{ [Op.like]: `%${req.params.query}%` }}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/serije/broj', (req, res) => {
    Serije.findAll()
    .then(rows => {
        
        res.json(rows.length)
    })
    .catch(err => res.status(500).json(err))
})

app.get('/serije/:id', (req, res) => {
    Serije.findOne({where: {id: req.params.id}, include: ['zanr', 'direktor', 'sezone']})
    .then(row => {
        if(row == null){
            res.json({msg: `Serija sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

app.get('/serije/zanr/:zanrId', (req, res) => {
    Serije.findAll({where: {zanrId: req.params.zanrId}, include: ['zanr', 'direktor', 'sezone']})
    .then(row => {
        if(row == null){
            res.json({msg: `Serija ovog zanra ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const serijeSema = Joi.object().keys({
    naziv: Joi.string().trim().min(0).max(255).required(),
    opis: Joi.string(),
    ocena: Joi.number().required(),
    direktorId: Joi.number().required(),
    glumacId: Joi.number().required(),
    zanrId:Joi.number().required()
})

app.post('/serije', authZaposleni, (req, res) => {
    Joi.validate(req.body, serijeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Serije.create( {naziv: req.body.naziv, opis: req.body.opis, ocena: req.body.ocena, 
                direktorId: req.body.direktorId, glumacId: req.body.glumacId, zanrId: req.body.zanrId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/serije/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, serijeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Serije.update( {naziv: req.body.naziv, opis: req.body.opis, ocena: req.body.ocena, 
                direktorId: req.body.direktorId, glumacId: req.body.glumacId, zanrId: req.body.zanrId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/serije/:id', authZaposleni, (req, res) => {
    Serije.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Sezone

app.get('/sezone', (req, res) => {
    Sezone.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/sezone/:id', (req, res) => {
    Sezone.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Sezona sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const sezonaSema = Joi.object().keys({
    naziv: Joi.string().trim().min(0).max(255).required(),
    opis: Joi.string().max(10000),
    ocena: Joi.number().required(),
    cena: Joi.number().min(0).required(),
    serijaId: Joi.number().required()
})

app.post('/sezone', authZaposleni, (req, res) => {
    Joi.validate(req.body, sezonaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Sezone.create( {naziv: req.body.naziv, opis: req.body.opis, ocena: req.body.ocena, 
                cena: req.body.cena, serijaId: req.body.serijaId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/sezone/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, sezonaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Sezone.update( {naziv: req.body.naziv, opis: req.body.opis, ocena: req.body.ocena, 
                cena: req.body.cena, serijaId: req.body.serijaId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/sezone/:id', (req, res) => {
    Sezone.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Epizode

app.get('/epizode', (req, res) => {
    Epizode.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/epizode/:id', (req, res) => {
    Epizode.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Epizoda sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

app.get('/epizode/sezone/:sezonaId', (req, res) => {
    Epizode.findAll({where: {sezonaId: req.params.sezonaId}, include: ['sezona']})
    .then(row => {
        if(row == null){
            res.json({msg: `Epizode ove sezone ne postoje`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const epizodeSema = Joi.object().keys({
    naziv: Joi.string().trim().min(0).max(255).required(),
    opis: Joi.string().max(10000),
    video: Joi.string().max(4000).required(),
    sezonaId: Joi.number().required()
})

app.post('/epizode', authZaposleni, (req, res) => {
    Joi.validate(req.body, epizodeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Epizode.create( {naziv: req.body.naziv, opis: req.body.opis, 
                video: req.body.video, sezonaId: req.body.sezonaId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/epizode:/id', authZaposleni, (req, res) => {
    Joi.validate(req.body, epizodeSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Epizode.update( {naziv: req.body.naziv, opis: req.body.opis, 
                video: req.body.video, sezonaId: req.body.sezonaId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/epizode/:id', authZaposleni, (req, res) => {
    Epizode.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Filmovi
//{include : [{ model: bar, attributes: attributes}]}

app.get('/filmovi', (req, res) => {
    Filmovi.findAll({include: ['zanr', 'direktor']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})


app.get('/filmovi/search/:query', (req, res) => {
    Filmovi.findAll({include: ['zanr', 'direktor'], where: {naziv:{ [Op.like]: `%${req.params.query}%` }}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/filmovi/broj', (req, res) => {
    Filmovi.findAll()
    .then(rows => {
        
        res.json(rows.length)
    })
    .catch(err => res.status(500).json(err))
})

app.get('/filmovi/:id', (req, res) => {
    Filmovi.findOne({where: {id: req.params.id}, include: ['zanr', 'direktor']})
    .then(row => {
        if(row == null){
            res.json({msg: `Film sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

app.get('/filmovi/zanr/:zanrId', (req, res) => {
    Filmovi.findAll({where: {zanrId: req.params.zanrId}, include: ['zanr', 'direktor']})
    .then(row => {
        if(row == null){
            res.json({msg: `Film ovog zanra ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const filmoviSema = Joi.object().keys({
    naziv: Joi.string().trim().min(0).max(255).required(),
    opis: Joi.string().max(10000),
    video: Joi.string().max(4000).required(),
    ocena: Joi.number().required(),
    cena: Joi.number().min(0),
    besplatan: Joi.boolean().required(),
    direktorId: Joi.number().required(),
    glumacId: Joi.number().required(),
    zanrId: Joi.number().required()
})

app.post('/filmovi', authZaposleni, (req, res) => {
    Joi.validate(req.body, filmoviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Filmovi.create( {naziv: req.body.naziv, opis: req.body.opis, video: req.body.video, ocena: req.body.ocena, 
                cena: req.body.cena, besplatan: req.body.besplatan, direktorId: req.body.direktorId, glumacId: req.body.glumacId, 
                zanrId: req.body.zanrId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/filmovi/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, filmoviSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Filmovi.update( {naziv: req.body.naziv, opis: req.body.opis, video: req.body.video, ocena: req.body.ocena, 
                cena: req.body.cena, besplatan: req.body.besplatan, direktorId: req.body.direktorId, glumacId: req.body.glumacId, 
                zanrId: req.body.zanrId}, {where: {id: req.params.id}}  )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/filmovi/:id', authZaposleni, (req, res) => {
    Filmovi.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

// Korisnici

app.get('/korisnici', authAdmin, (req, res) => {
    Korisnici.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/korisnici/:id', authAdmin, (req, res) => {
    Korisnici.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Korisnik sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const korisniciSema = Joi.object().keys({
    ime: Joi.string().trim().max(255).required(),
    prezime: Joi.string().trim().max(255).required(),
    username: Joi.string().trim().max(255).required(),
    password: Joi.string().min(4).max(30).required(),
    email: Joi.string().trim().email().required(),
    tip: Joi.number().min(0).max(2).required(),
})

app.post('/korisnici', authAdmin, (req, res) => {
    Joi.validate(req.body, korisniciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.create( {ime: req.body.ime, prezime: req.body.prezime, username: req.body.username, 
                password: req.body.password, email: req.body.email, tip: req.body.tip} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/korisnici/:id', authAdmin, (req, res) => {
    Joi.validate(req.body, korisniciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.update( {ime: req.body.ime, prezime: req.body.prezime, username: req.body.username, 
                password: req.body.password, email: req.body.email, tip: req.body.tip}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/korisnici/:id', authAdmin, (req, res) => {
    Korisnici.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})
// Komentari

app.get('/komentari', authToken, (req, res) => {
    Komentari.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/komentari/poFilmu/:id', (req, res) => {
    Komentari.findAll({where: {filmId: req.params.id}, include: ['korisnik']})
    .then(row => {
        if(row == null){
            res.json({msg: `Komenatar sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

app.get('/komentari/poEpizodi/:id', (req, res) => {
    Komentari.findAll({where: {epizodaId: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Komenatar sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

app.get('/komentari/:id', authToken, (req, res) => {
    Komentari.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Komenatr sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const komentariSema = Joi.object().keys({
    tekst: Joi.string().max(5000).required(),
    filmId: Joi.number(),
    epizodaId: Joi.number(),
    korisnikId: Joi.number().required()
})

app.post('/komentari', authToken, (req, res) => {
    Joi.validate(req.body, komentariSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Komentari.create( {tekst: req.body.tekst, filmId: req.body.filmId, epizodaId: req.body.epizodaId, 
                korisnikId: req.body.korisnikId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/komentari/:id', authToken, (req, res) => {
    Joi.validate(req.body, komentariSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Komentari.update( {tekst: req.body.tekst, filmId: req.body.filmId, epizodaId: req.body.epizodaId, 
                korisnikId: req.body.korisnikId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/komentari/:id', authToken, (req, res) => {
    Komentari.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

//Iznajmljeni

app.get('/iznajmljeni', authToken, (req, res) => {
    Iznajmljeni.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/iznajmljeni/odKorisnika', authToken, (req, res) => {
    Iznajmljeni.findAll({where: {korisnikId: req.korisnik.id}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/iznajmljeni/film/odKorisnika/:filmId', authToken, (req, res) => {
    Iznajmljeni.findOne({where: {korisnikId: req.korisnik.id, filmId: req.params.filmId}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/iznajmljeni/serija/odKorisnika/:serijaId', authToken, (req, res) => {
    Iznajmljeni.findOne({where: {korisnikId: req.korisnik.id, serijaId: req.params.serijaId}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/iznajmljeni/:id', authToken, (req, res) => {
    Iznajmljeni.findOne({where: {id: req.params.id}})
    .then(row => {
        if(row == null){
            res.json({msg: `Iznajmljeni sa id-jem ${req.params.id} ne postoji`})
        }else{
            res.json(row)
        }
    })
    .catch(err => res.status(500).json(err))
})

const iznajmljeniSema = Joi.object().keys({
    datumIsteka: Joi.date().raw().required(),
    filmId: Joi.number(),
    serijaId: Joi.number(),
    //korisnikId: Joi.number().required()
})

app.post('/iznajmljeni/serija', authToken, (req, res) => {
    Joi.validate(req.body, iznajmljeniSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Iznajmljeni.create( {datumIsteka: req.body.datumIsteka, serijaId: req.body.serijaId, 
                korisnikId: req.korisnik.id} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.post('/iznajmljeni/serija/zaposleni', authZaposleni, (req, res) => {
    Joi.validate(req.body, iznajmljeniSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Iznajmljeni.create( {datumIsteka: req.body.datumIsteka, serijaId: req.body.serijaId, 
                korisnikId: req.body.korisnikId} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.post('/iznajmljeni/film', authToken, (req, res) => {
    Joi.validate(req.body, iznajmljeniSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Iznajmljeni.create( {datumIsteka: req.body.datumIsteka, filmId: req.body.filmId,
                korisnikId:  req.korisnik.id} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.put('/iznajmljeni/serija/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, iznajmljeniSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Iznajmljeni.update( {datumIsteka: req.body.datumIsteka, serijaId: req.body.serijaId, 
                korisnikId: req.body.korisnikId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})
app.put('/iznajmljeni/film/:id', authZaposleni, (req, res) => {
    Joi.validate(req.body, iznajmljeniSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Iznajmljeni.update( {datumIsteka: req.body.datumIsteka, filmId: req.body.filmId, 
                korisnikId: req.body.korisnikId}, {where: {id: req.params.id}} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.delete('/iznajmljeni/:id', authZaposleni, (req, res) => {
    Iznajmljeni.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})


//Korpa
app.get('/korpa', authToken, (req, res) => {
    Korpa.findAll()
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/korpa/odKorisnika', authToken, (req, res) => {
    Korpa.findAll({where: {korisnikId: req.korisnik.id}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/korpa/film/odKorisnika/:filmId', authToken, (req, res) => {
    Korpa.findOne({where: {korisnikId: req.korisnik.id, filmId: req.params.filmId}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.get('/korpa/serija/odKorisnika/:serijaId', authToken, (req, res) => {
    Korpa.findOne({where: {korisnikId: req.korisnik.id, serijaId: req.params.serijaId}, include: ['film', 'serija']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

const korpaSema = Joi.object().keys({
    filmId: Joi.number(),
    serijaId: Joi.number(),
    //korisnikId: Joi.number().required()
})

app.post('/korpa/serija', authToken, (req, res) => {
    Joi.validate(req.body, korpaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korpa.create( {serijaId: req.body.serijaId, korisnikId: req.korisnik.id} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})

app.post('/korpa/film', authToken, (req, res) => {
    Joi.validate(req.body, korpaSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korpa.create( { filmId: req.body.filmId, korisnikId: req.korisnik.id} )
                .then( rows => res.json(rows) )
                .catch(err => res.status(500).json(err));
        }
    })
})


app.delete('/korpa/korisnik', authToken, (req, res) => {
    Korpa.destroy({where: {korisnikId: req.korisnik.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

app.delete('/korpa/:id', authToken, (req, res) => {
    Korpa.destroy({where: {id: req.params.id}})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})




// GlumiUFilmu
app.get('/glumiUFilmu/:id', (req, res) => {
    glumiUFilmu.findAll({where: {filmId: req.params.id}, include: ['glumac']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

//GlumiUSeriji

app.get('/glumiUSeriji/:id', (req, res) => {
    glumiUSeriji.findAll({where: {serijaId: req.params.id}, include: ['glumac']})
    .then(rows => res.json(rows))
    .catch(err => res.status(500).json(err))
})

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
 
//     socket.on('comment', msg => {
//         Komentari.create({ tekst: msg.tekst, korisnikId: msg.user.korisnikId, filmId: msg.filmId , epizodaId: msg.epizodaId})
//             .then( rows => {
//                 Komentari.findOne({ where: { id: rows.id }, include: ['korisnik'] })
//                     .then( msg => io.emit('comment', JSON.stringify(msg)) ) 
//             }).catch( err => res.status(500).json(err) );
//     });

//     socket.on('error', err => socket.emit('error', err.message) );
// });
app.listen({ port: 8001 }, async () => {
    await sequelize.authenticate();
});

