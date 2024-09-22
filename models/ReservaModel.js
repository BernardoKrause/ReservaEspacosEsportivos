const db = require('../config/db');

const Reserva = {
    getAllReservas: async () => {
        try {
            const query = 'SELECT * FROM Reserva';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    createNewReserva: async (dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipoEspaco) => {
        try {
            const query = 'INSERT INTO Reserva (dataReserva, descricao, horaInicio, horaTermino, situacao, codEspaco, codTipoEspaco) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
            const values = [dataReserva, descricao, horaInicio, horaTermino, "A", codEspaco, codTipoEspaco];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    },

    updateReserva: async(codReserva ,dataReserva, descricao, horaInicio, horaTermino, codTipoEspaco) => {
        try{
            const query = `UPDATE Reserva SET dataReserva = ${dataReserva}, descricao = ${descricao}, horaInicio = ${horaInicio}, horaTermino = ${horaTermino}, codeTipoEspaco = ${codTipoEspaco}, situacao = A WHERE codReserva = ${codReserva}` ;
            result = await db.query(query);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    },

    updateSituacaoReserva: async(codReserva, situacao) =>{
        try{
            const query = `UPDATE Reserva SET situacao = ${situacao} WHERE codReserva = ${codReserva}` ;
            result = await db.query(query);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Reserva;
