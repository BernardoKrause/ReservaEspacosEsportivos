const CidadeModel = require('../models/CidadeModel');

const cidadeController = {
    getAllCidades: async (req, res) => {
        try {
            const cidades = await CidadeModel.getAllCidades();
            res.status(200).json(cidades);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de cidades.' });
        }
    }
};

module.exports = cidadeController;