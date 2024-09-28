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
        const {codReserva, dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipo} = req.body;
        try{
            const reserva = await ReservaModel.updateReserva(dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipo);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: `Erro ao atualizar a Reserva ${codReserva}.` });

        }
    },

    updateSituacaoReserva: async(req, res, next) => {
        const { codReserva, situacao } = req.body;
        try{
            const reserva = await ReservaModel.updateSituacaoReserva(codReserva, situacao);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: `Erro ao atualizar a Situação da reserva ${codReserva}.` });

        }
    },

    deleteReserva: async(req, res, next) => {
        const{codReserva} = req.params.codReserva;
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
    }

};

module.exports = reservaController;