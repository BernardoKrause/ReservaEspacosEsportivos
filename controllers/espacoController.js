const EspacoModel = require('../models/EspacoModel');

const espacoController = {
    getAllEspacos: async (req, res) => {
        try {
            const espacos = await EspacoModel.getAllEspacos();
            res.status(200).json(espacos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de espaços.'});
        }
    },

    createNewEspaco: async (req, res) => {
        const { nomeEspaco, horarioAbertura, horarioFechamento, capacidade, codEndereco } = req.body;
        try {
            const newEspaco = await EspacoModel.createNewEspaco(nomeEspaco, horarioAbertura, horarioFechamento, capacidade, codEndereco);
            res.status(201).json(newEspaco);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar novo espaço.'})
        }
    }
};

module.exports = espacoController;