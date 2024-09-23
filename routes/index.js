const express = require('express');
const tiposEspaco = require('./tipoEspacoRoutes')
const tipos = require('./tipoRoutes')
const enderecos = require('./enderecoRoutes')
const espacos = require('./espacosRoutes')
const cidades = require('./cidadeRoutes')
const reservas = require('./reservaRoutes')
const usuarios = require('./usuarioRoutes')

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
        reservas,
        tipos,
        usuarios

    )
}

module.exports = routes;