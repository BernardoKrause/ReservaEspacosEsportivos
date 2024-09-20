const EnderecoModel = require('../models/EnderecoModel');

const enderecoController = {
    getAllEnderecos: async (req, res) => {
        try {
            const enderecos = await EnderecoModel.getAllEnderecos();
            res.status(200).json(enderecos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de enderecos.'});
        }
    },

    createNewEndereco: async (req, res) => {
        const { logradouro, bairro, CEP, numeroEndereco, complementoEndereco } = req.body;
        try {
            const newEndereco = await EnderecoModel.createNewEndereco(logradouro, bairro, CEP, numeroEndereco, complementoEndereco);
            res.status(201).json(newEndereco);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar nova endereco.'})
        }
    }
};

module.exports = enderecoController;