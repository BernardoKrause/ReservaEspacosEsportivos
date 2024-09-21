const express = require('express');
const espacoController = require('../controllers/espacoController');

const router = express.Router();

router
    .get('/api/espacos', espacoController.getAllEspacos)
    .post('/api/espacos', espacoController.createNewEspaco)

module.exports = router;