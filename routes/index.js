const express = require('express');
const router = express.Router();

const Mensaje = require('../models/mensaje.model')

router.get('/', (req, res) => {

  res.render('index')
});

/* GET home page. */
router.get('/chat', async function (req, res) {

  const mensajes = await Mensaje.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .exec();

  res.render('chat', {
    mensajes: mensajes.reverse(),
    nombre: req.session.nombre
  });
});

router.post('/login', (req, res) => {
  res.session.nombre = req.body.nombre;
  res.redirect('/chat');
});

module.exports = router;
