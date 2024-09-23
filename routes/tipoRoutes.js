const express = require('express');
const tipoController = require('../controllers/tipoController');

const router = express.Router();

router
    .get('/api/tipos', tipoController.getAllTipos)
    .get('/api/tipos/:id', tipoController.listTipoById)

module.exports = router;