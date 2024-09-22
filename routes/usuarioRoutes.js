const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router
    .get('/api/usuarios', usuarioController.getAllUsuarios)
    .post('/api/usuarios', usuarioController.createNewUsuario)

module.exports = router;