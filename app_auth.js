const express = require('express');
const { sequelize, Korisnici } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
const Joi = require('joi');

const app = express();

var corsOptions = { 
    origin: 'http://127.0.0.1:8002',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


const korisniciSema = Joi.object().keys({
    ime: Joi.string().trim().max(255).required(),
    prezime: Joi.string().trim().max(255).required(),
    username: Joi.string().trim().max(255).required(),
    password: Joi.string().min(4).max(30).required(),
    email: Joi.string().trim().email().required()
})

app.post('/register', (req, res) => {
    Joi.validate(req.body, korisniciSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            const obj = {
                ime: req.body.ime,
                prezime: req.body.prezime,
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 10),
                email: req.body.email,
                tip: 2
            };

            Korisnici.create(obj).then( rows => {
                
                const usr = {
                    id: rows.id,
                    username: rows.username,
                    tip: rows.tip
                };

                const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

                console.log(token);
                
                res.json({ token: token });

            }).catch( err => res.status(500).json(err) );
        }
    })
});

const loginSema = Joi.object().keys({
    username: Joi.string().trim().max(255).required(),
    password: Joi.string().min(4).max(30).required()
})

app.post('/login', (req, res) => {
    Joi.validate(req.body, loginSema, (err, result) => {
        if(err){
            res.status(400).send(err.details);
        }else{
            Korisnici.findOne({ where: { username: req.body.username } })
                .then( usr => {
                    if(usr == null){
                        res.status(400).json({ msg: "Invalid credentials"});
                    }else{
                        if (bcrypt.compareSync(req.body.password, usr.password)) {
                            const obj = {
                                id: usr.id,
                                username: usr.username,
                                tip: usr.tip
                            };
                    
                            const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                            
                            res.json({ token: token });
                        } else {
                            res.status(400).json({ msg: "Invalid credentials"});
                        }
                    }
                })
                .catch( err => res.status(500).json(err) );
        }
    })
});

app.listen({ port: 8000 }, async () => {
    await sequelize.authenticate();
});