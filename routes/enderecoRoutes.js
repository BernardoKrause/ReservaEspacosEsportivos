const express = require('express');
const enderecoController = require('../controllers/enderecoController');

const router = express.Router();

router
    .get('/api/enderecos', enderecoController.getAllEnderecos)
    .post('/api/enderecos', enderecoController.createNewEndereco)

module.exports = router;