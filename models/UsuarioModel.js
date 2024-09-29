const db = require('../config/db');

const Usuario = {
    getAllUsuarios: async () => {
        try {
            const query = 'SELECT * FROM Usuario';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    createNewUsuario: async (codReserva, nomeUsuario, emailUsuario, telefoneUsuario, cpfUsuario) => {
        try {
            const query = 'INSERT INTO Usuario (codReserva, nomeUsuario, emailUsuario, telefoneUsuario, cpfUsuario) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [codReserva, nomeUsuario, emailUsuario, telefoneUsuario, cpfUsuario];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    },

    getUsuarioByCodReserva: async (codReserva) => {
        try {
            const query = `SELECT * FROM Usuario WHERE codReserva = ${codReserva}`;
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Usuario;