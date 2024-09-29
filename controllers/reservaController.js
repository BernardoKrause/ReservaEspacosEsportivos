const ReservaModel = require('../models/ReservaModel');

const reservaController = {
    getAllReservas: async (req, res) => {
        try {
            const reservas = await ReservaModel.getAllReservas();
            res.status(200).json(reservas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de Reserva.'});
        }
    },

    createNewReserva: async(req, res, next) => {
        try{
            const { dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipo} = req.body;
            const reserva = await ReservaModel.createNewReserva(dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipo);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: 'Erro ao criar Reserva.' });

        }
    },

    updateReserva: async(req, res, next) => {
        const codReserva = req.params.codReserva;
        try{
            const { dataReserva, descricao, horaInicio, horaTermino} = req.body;
            const reserva = await ReservaModel.updateReserva(codReserva, dataReserva, descricao, horaInicio, horaTermino);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: `Erro ao atualizar a Reserva` });

        }
    },

    deleteReserva: async(req, res, next) => {
        const codReserva = req.params.codReserva;
        try{
            const reserva = await ReservaModel.deleteReserva(codReserva);
            res.status(200).json(reserva); 

        } catch (error){
            res.status(500).json ({error:`Erro ao excluir a Reserva ${codReserva}.`});
        }
    },

    getAlldatahoraByTipoEspaco: async(req, res, next) => {
        const codEspaco = req.params.codEspaco;
        const codTipo = req.params.codTipo;
        try{
            const reservas = await ReservaModel.getDataHoraReserva(codEspaco,codTipo);
            res.status(200).json(reservas); 

        } catch (error){
            res.status(500).json({error:`Erro ao listar horas e dadas das Reservas no espaco.`});
        }
    },

    getReserva: async(req, res, next) => {
        const codReserva = req.params.codReserva;

        try {
            const reserva = await ReservaModel.getReservaById(codReserva);
            res.status(200).json(reserva);
        } catch (error) {
            res.status(500).json({error:"Erro ao listar reserva."});
        }
    },

    getReservaByEspaco: async(req, res, next) => {
        const codEspaco = req.params.codEspaco;
        try {
            const reserva = await ReservaModel.getReservasByEspaco(codEspaco);
            res.status(200).json(reserva);
        } catch (error) {
            res.status(500).json({error:"Erro ao listar reserva."});
        }
    }

};

module.exports = reservaController;