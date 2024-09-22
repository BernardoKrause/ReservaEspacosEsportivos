const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router
    .get('/api/usuarios', usuarioController.getAllusuarios)
    .post('/api/usuarios', usuarioController.createNewusuario)

module.exports = router;