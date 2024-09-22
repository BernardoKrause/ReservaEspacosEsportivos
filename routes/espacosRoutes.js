const express = require('express');
const espacoController = require('../controllers/espacoController');

const router = express.Router();

router
    .get('/api/espacos', espacoController.getAllEspacos)
    .get('/api/espacos/:id', espacoController.listEspacoById)

module.exports = router;