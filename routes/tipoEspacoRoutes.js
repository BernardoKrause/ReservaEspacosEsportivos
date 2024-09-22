const express = require('express');
const tipoEspacoController = require('../controllers/tipoEspacoController');

const router = express.Router();

router
    .get('/api/tipoEspacos', tipoEspacoController.getAllTipoEspacos)
    .get('/api/tipoEspacos/:id', tipoEspacoController.listTipoEspacoById)

module.exports = router;