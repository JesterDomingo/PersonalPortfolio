//Imports
const express = require('express');
const app = express();
const path = require('path');

//Static Files
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

//Set Templating Engine
app.set('view engine', 'ejs')

//Navigation
app.get('', (req, res) =>{
    res.render('index');
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