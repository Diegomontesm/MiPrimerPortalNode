const express = require('express');
const router = express.Router();//MULTIPLES RUTAS Y MANTENERLAS EN ARCHIVOS SEPARADOS

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;