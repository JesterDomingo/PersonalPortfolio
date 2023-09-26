//Imports
const express = require("express");
const app = express();
const port = 5000;

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//Set Templating Engine
app.set('view engine', 'ejs')

//Navigation
app.get('', (req, res) =>{
    res.render('index');
});

app.get('/', (req, res) =>{
    res.render('about');
});

app.get('/', (req, res) =>{
    res.render('projects');
});

app.get('/', (req, res) =>{
    res.render('services');
});

app.get('/', (req, res) =>{
    res.render('contactme');
});

//port listening
app.listen(5000, ()=>{console.log("App is running")})