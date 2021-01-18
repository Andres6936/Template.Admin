"use strict";

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/buttons.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/buttons.html'));
})

app.get('/cards.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/cards.html'));
})

app.get('/utilities-color.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/utilities-color.html'));
})

app.get('/utilities-border.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/utilities-border.html'));
})

app.get('/utilities-animation.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/utilities-animation.html'));
})

app.get('/utilities-other.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/utilities-other.html'));
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'));
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

app.get('/forgot-password.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/forgot-password.html'));
})

app.get('/blank.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/blank.html'));
})

app.get('/404.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/404.html'));
})

app.get('/charts.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/charts.html'));
})

app.get('/tables.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/tables.html'));
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Executing app at http://localhost:${port}`);
})
