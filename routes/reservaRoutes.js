const express = require('express');
const reservaController = require('../controllers/reservaController');

const router = express.Router();

router
    .get('/api/reservas', reservaController.getAllReservas)
    .post('/api/reservas', reservaController.createNewReserva)
    .put('/api/reserva/:codReserva', reservaController.updateReserva)
    .patch('/api/reserva/:codReserva/situacao', reservaController.updateSituacaoReserva)
    .delete('/api/reserva/:codReserva', reservaController.deleteReserva)

module.exports = router;