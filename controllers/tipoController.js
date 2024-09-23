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
            id = req.params.id
            const tipo = await TipoModel.getTipo(id);
            res.status(200).json(tipo);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter tipo de espaço.' });
        }
    }
};

module.exports = tipoController;