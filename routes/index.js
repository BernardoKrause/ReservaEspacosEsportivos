const express = require('express');
const tiposEspaco = require('./tipoEspacoRoutes')
const enderecos = require('./enderecoRoutes')
const espacos = require('./espacosRoutes')
const cidades = require('./cidadeRoutes')

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({ titulo: "Reserva de Espaços" })
    })

    app.use(
        express.json(),
        tiposEspaco,
        enderecos,
        espacos,
        cidades,
    )
}

module.exports = routes;