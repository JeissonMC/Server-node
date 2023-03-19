const express = require('express');
const app = express()
const hbs = require('hbs');
require('dotenv').config()

const puerto = process.env.PORT;

app.set('view engine', 'hbs')
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/parcial', function (err) {});

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jeisson Moscoso',
        title: 'curso de node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Jeisson Moscoso',
        title: 'curso de node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Jeisson Moscoso',
        title: 'curso de node'
    });
})

app.listen(puerto, () =>{
console.log("el servidor esta corriendo en el:", puerto);
})