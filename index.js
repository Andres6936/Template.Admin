"use strict";

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/buttons.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/buttons.html'));
})

app.get('/cards.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/cards.html'));
})

app.get('/utilities-color.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/utilities-color.html'));
})

app.get('/utilities-border.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/utilities-border.html'));
})

app.get('/utilities-animation.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/utilities-animation.html'));
})

app.get('/utilities-other.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/utilities-other.html'));
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/login.html'));
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/register.html'));
})

app.get('/forgot-password.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/forgot-password.html'));
})

app.get('/blank.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/blank.html'));
})

app.get('/404.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/404.html'));
})

app.get('/charts.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/charts.html'));
})

app.get('/tables.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/tables.html'));
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Executing app at http://localhost:${port}`);
})
