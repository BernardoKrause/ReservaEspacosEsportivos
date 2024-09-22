const express = require('express');
const reservaController = require('../controllers/reservaController');

const router = express.Router();

router
    .get('/api/reservas', reservaController.getAllreservas)
    .post('/api/reservas', reservaController.createNewreserva)
    .put('/api/reserva/:codReserva', reservaController.updatereserva)
    .put('/api/reserva/:codReserva', reservaController.updateSituacaoreserva)

module.exports = router;