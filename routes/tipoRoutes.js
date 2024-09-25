const express = require('express');
const tipoController = require('../controllers/tipoController');

const router = express.Router();

router
    .get('/api/tipos', tipoController.getAllTipos)
    .get('/api/tipos/:id', tipoController.listTipoById)
    .get('/api/tipos/espaco/:idEspaco', tipoController.listTipoByNomeEspaco)

module.exports = router;