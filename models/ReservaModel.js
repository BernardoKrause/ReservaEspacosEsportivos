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

    createNewReserva: async (dataReserva, descricao, horaInicio, horaTermino, codEspaco, codTipo) => {
        try {
            const query = 'INSERT INTO Reserva (dataReserva, descricao, horaInicio, horaTermino, situacao, codEspaco, codTipo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
            const values = [dataReserva, descricao, horaInicio, horaTermino, "A", codEspaco, codTipo];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    },

    updateReserva: async(codReserva ,dataReserva, descricao, horaInicio, horaTermino, codTipo) => {
        try{
            const query = `UPDATE Reserva SET dataReserva = ${dataReserva}, descricao = ${descricao}, horaInicio = ${horaInicio}, horaTermino = ${horaTermino}, codeTipo = ${codTipo}, situacao = A WHERE codReserva = ${codReserva}` ;
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
    },

    deleteReserva: async (codReserva) => {
        try{
            const query = `DELETE FROM Reserva WHERE codReserva = $1`;
            result = await db.query(query, [codReserva]);
            return result.rowCount > 0 ? result.rows[0] : null;
        }catch(err){
            throw err;
        }
    },

    getDataHoraReserva: async (codEspaco,codTipo) =>{
        try{
            const query = `SELECT codReserva,dataReserva,horaInicio,horaTermino FROM Reserva WHERE codEspaco=${codEspaco} and codTipo = ${codTipo}`;
            result = await db.query(query);
            return result.rows;
        }catch(err){
            throw err;
        }
    },

    getReservaById: async (codReserva) => {
        try {
            const query = `SELECT * FROM Reserva WHERE codReserva = ${codReserva}`;
            result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    },
    getReservasByEspaco: async (codEspaco) => {
        try{
            const query = `SELECT RS.codReserva, RS.dataReserva,RS.horaInicio,RS.horaTermino, RS.descricao, ES.nomeEspaco, TP.nomeTipo FROM Reserva AS RS JOIN Espaco AS ES on ES.codEspaco = RS.codEspaco JOIN TIPO AS TP ON TP.codTipo = RS.codTipo WHERE RS.codEspaco = ${codEspaco}`;
            result = await db.query(query);
            return result.rows;
        }catch(err){
            throw err;
        }
    }
};

module.exports = Reserva;
