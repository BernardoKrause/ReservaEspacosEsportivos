const ReservaModel = requiRe('../models/ReservaModel');

const reservaController = {
    getAllreservas: async (req, res) => {
        try {
            const reservas = await ReservaModel.getAllreservas();
            res.status(200).json(reservas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter lista de Reserva.'});
        }
    },

    createNewreserva: async(req, res, next) => {
        try{
            const { dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipoEspaco} = req.body;
            const reserva = await ReservaModel.createNewReserva(dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipoEspaco);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: 'Erro ao criar Reserva.' });

        }
    },

    updatereserva: async(req, res, next) => {
        const {codReserva, dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipoEspaco} = req.body;
        try{
            const reserva = await ReservaModel.updateReserva(dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipoEspaco);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: `Erro ao atualizar a Reserva ${codReserva}.` });

        }
    },

    updateSituacaoreserva: async(req, res, next) => {
        const { codReserva, situacao } = req.body;
        try{
            const reserva = await ReservaModel.updateSituacaoReserva(codReserva, situacao);
            res.status(200).json(reserva);
        } catch (error){
            res.status(500).json({ error: `Erro ao atualizar a Situação da reserva ${codReserva}.` });

        }
    }
};

module.exports = reservaController;