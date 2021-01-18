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

app.get('/html/:file', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/' + req.params.file));
})

app.use(express.static('public/'));

app.listen(port, () => {
    console.log(`Executing app at http://localhost:${port}`);
})
