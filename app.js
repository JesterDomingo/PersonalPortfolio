//Imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

//Middleware and Static Files
app.use(bodyParser());
app.use(cors());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

//Set Templating Engine
app.set('view engine', 'ejs')

//Navigation
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

//port listening
app.listen(5000, ()=>{console.log("App is running")})