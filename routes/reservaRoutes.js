const express = require('express');
const reservaController = require('../controllers/reservaController');

const router = express.Router();

router
    .get('/api/reservas', reservaController.getAllReservas)
    .post('/api/reservas', reservaController.createNewReserva)
    .patch('/api/reserva/:codReserva', reservaController.updateReserva)
    .delete('/api/reserva/:codReserva', reservaController.deleteReserva)
    .get('/api/reservas/horas', reservaController.getAlldatahoraByTipoEspaco)
    .get('/api/reservas/:codEspaco/:codTipo', reservaController.getAlldatahoraByTipoEspaco)
    .get('/api/reservas/:codReserva', reservaController.getReserva)
    .get('/api/reserva/espaco/:codEspaco', reservaController.getReservaByEspaco)

module.exports = router;