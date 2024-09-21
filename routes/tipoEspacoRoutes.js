const express = require('express');
const tipoEspacoController = require('../controllers/tipoEspacoController');

const router = express.Router();

router
    .get('/api/tipoEspacos', tipoEspacoController.getAllTipoEspacos)
    .post('/api/tipoEspacos', tipoEspacoController.createNewTipoEspaco)

module.exports = router;