const TipoModel = require('../models/TipoModel');

const tipoController = {
    getAllTipos: async (req, res) => {
        try {
            const tipos = await TipoModel.getAllTipos();
            res.status(200).json(tipos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de tipos de espaço.'});
        }
    },

    listTipoById: async (req,res, next) => {
        try {
            id = req.params.id;
            const tipo = await TipoModel.getTipo(id);
            res.status(200).json(tipo);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter tipo de espaço.' });
        }
    },

    listTipoByidEspaco: async (req,res, next) => {
        try {
            id = req.params.idEspaco;
            const tipo = await TipoModel.getAllTiposbyEspaco(id);
            res.status(200).json(tipo);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter a lista de tipos desse espaço.' });
        }
    },

    listTipoByNomeEspaco: async (req,res, next) => {
        try {
            nome = req.params.nomeEspaco;
            const tipo = await TipoModel.getAllTiposbyNomeEspaco(nome);
            res.status(200).json(tipo);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter a lista de tipos desse espaço.' });
        }
    }
};

module.exports = tipoController;