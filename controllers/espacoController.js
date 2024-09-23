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

    listEspacoById: async (req,res, next) => {
        try {
            id = req.params.id;
            const espaco = await EspacoModel.getEspaco(id);
            res.status(200).json(espaco);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter esse espaço.' });
        }
    },

    listEspacoByTipo: async(req, res, next) => {
        try{
            idTipo= req.body.codTipo;
            const espaco = await EspacoModel.selectByTipo(idTipo);
            res.status(200).json(espaco);
        }catch (error){
            res.status(500).json({error: 'Erro ao obter espaços desse tipo'})
        }
    },
    
    listEspacoByCapacidade: async(req, res, next) => {
        try{
            capacidade= req.body.capacidade;
            const espaco = await EspacoModel.selectByCapacidade(capacidade);
            res.status(200).json(espaco);
        }catch (error){
            res.status(500).json({error: 'Erro ao obter espaços com essa capacidade de pessoas'})
        }
    }
};

module.exports = espacoController;