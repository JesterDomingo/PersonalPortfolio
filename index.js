//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
//Static Files
app.use(bodyParser());
app.use(cors());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

//Set Templating Engine
app.set('view engine', 'ejs')

//Navigation
app.get('/home', (req, res) =>{
    res.render('layouts');
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/projects', (req, res) =>{
    res.render('projects');
});

app.get('/services', (req, res) =>{
    res.render('services');
});

app.get('/contactme', (req, res) =>{
    res.render('contactme');
});

//port listening
app.listen(5000, ()=>{console.log("App is running")})