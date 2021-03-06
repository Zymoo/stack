"use strict"

const mongoose = require('mongoose');
const User = require('./models/user');
const requestify = require('requestify')
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.listen(3000, () => {
    var mongoDB = 'mongodb://127.0.0.1/myApp';
    mongoose.connect(mongoDB,
        {
            useNewUrlParser: true, useUnifiedTopology: true
        });
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    mongoose.connection.once('open', function callback() {
        console.log('Conntected to mongo');
    });
    console.log("Server running on port " + 3000);
});

app.get('/', (req, res) => {
    res.status(200).json({
        app: 'API is running properly'
    });
});

app.get('/users', (req, res) => {
    User.find({}, 'login', (err, users) => {
        if (err) res.status(500).send();
        res.status(200).json(users);
    });
});

app.get('/signin', (req, res) => {
    var login = req.query.login;
    var password = req.query.password;
    console.log(login);
    User.findOne({ login: login, password: password }, (err, user) => {
        if (err) res.status(500).send();
        res.status(200).json(user);
    });
});

app.post('/create', (req, res) => {
    var login = req.query.login;
    var password = req.query.password;
    var stops = req.query.stops;
    var newUser = new User({
        login: login,
        password: password,
        stops: stops
    });
    newUser.save().then(result => {
        res.status(200).send({
            success: true,
            message: 'User saved successfully!'
        })
    }).catch(err => {
        console.error(err);
        res.status(500).send({
            success: false,
            message: 'User was not saved!'
        })
    })
});

app.get('/stop', (req, res) => {
    var stopId = req.query.id;
    console.log(stopId)
    requestify.get('http://ckan2.multimediagdansk.pl/delays?stopId=' + stopId).then(function(response) {
        res.json(response.getBody())}).catch(error => {
            res.json.status(500).send();
        });
});
