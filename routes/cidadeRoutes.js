const express = require('express');
const cidadeController = require('../controllers/cidadeController');

const router = express.Router();

router
    .get('/api/cidades', cidadeController.getAllCidades)

module.exports = router;