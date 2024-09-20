const TipoEspacoModel = require('../models/TipoEspacoModel');

const tipoEspacoController = {
    getAllTipoEspacos: async (req, res) => {
        try {
            const tipoEspacos = await TipoEspacoModel.getAllTipoEspacos();
            res.status(200).json(tipoEspacos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de tipos de espaço.'});
        }
    },

    createNewTipoEspaco: async (req, res) => {
        const { nome, codEspaco } = req.body;
        try {
            const newTipoEspaco = await TipoEspacoModel.createNewTipoEspaco(nome, codEspaco);
            res.status(201).json(newTipoEspaco);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar novo tipo de espaço.'})
        }
    }
};

module.exports = tipoEspacoController;