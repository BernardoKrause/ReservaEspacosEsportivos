const express = require('express');
const espacoController = require('../controllers/espacoController');

const router = express.Router();

router
    .get('/api/espacos', espacoController.getAllEspacos)
    .get('/api/espacos/:id', espacoController.listEspacoById)
    .get('/api/espacos/tipo/:idTipo',espacoController.listEspacoByTipo)
    .get('/api/espacos/capacidade/:capacidade',espacoController.listEspacoByCapacidade)

module.exports = router;