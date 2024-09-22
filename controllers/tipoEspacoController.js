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

    listTipoEspacoById: async (req,res, next) => {
        try {
            id = req.params.id
            const tipoEspaco = await TipoEspacoModel.getTipoEspaco(id);
            res.status(200).json(tipoEspaco);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter tipo de espaço.' });
        }
    }
};

module.exports = tipoEspacoController;