const express = require('express');
const router = express.Router();

const Mensaje = require('../models/mensaje.model')

/* GET home page. */
router.get('/', async function (req, res, next) {

  const mensajes = await Mensaje.find().sort({ createdAt: -1 }).limits(5).exec();

  res.render('index', { mensajes: mensajes.reverse() });
});

module.exports = router;
