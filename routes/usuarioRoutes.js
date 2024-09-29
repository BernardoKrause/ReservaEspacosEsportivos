const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router
    .get('/api/usuarios', usuarioController.getAllUsuarios)
    .post('/api/usuarios', usuarioController.createNewUsuario)
    .get('/api/usuario/:codReserva', usuarioController.getUsuarioByReserva)

module.exports = router;