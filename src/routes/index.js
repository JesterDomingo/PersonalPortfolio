// Importing express - creating route
const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

// POST route for handling the contact form submission
router.post('/contact', (req, res) => {
  res.send('Form submitted successfully');
});

module.exports = router;