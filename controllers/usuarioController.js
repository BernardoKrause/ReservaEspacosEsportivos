const UsuarioModel = require('../models/UsuarioModel');

const usuarioController = {
    getAllUsuarios: async (req, res) => {
        try {
            const usuarios = await UsuarioModel.getAllUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de usuario.'});
        }
    },

    createNewUsuario: async(req, res, next) => {
        try{
            const {codReserva, nomeUsuario, emailUsuario, telefoneUsuario, cpfUsuario} = req.body;
            const usuario = await UsuarioModel.createNewUsuario(codReserva, nomeUsuario, emailUsuario, telefoneUsuario, cpfUsuario);
            res.status(200).json(usuario);
        } catch (error){
            res.status(500).json({ error: 'Erro ao criar o Usuario dessa reserva.' });

        }
    }
};

module.exports = usuarioController;