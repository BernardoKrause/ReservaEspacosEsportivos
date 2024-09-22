const express = require('express');
const tiposEspaco = require('./tipoEspacoRoutes')
const enderecos = require('./enderecoRoutes')
const espacos = require('./espacosRoutes')
const reserva = require('./reservaRoutes')
const usuario = require('./usuarioRoutes')

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({ titulo: "Reserva de Espaços" })
    })

    app.use(
        express.json(),
        tiposEspaco,
        enderecos,
        espacos,
        reserva,
        usuario
    )
}

module.exports = routes;