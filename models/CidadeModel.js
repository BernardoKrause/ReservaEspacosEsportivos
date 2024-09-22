const db = require('../config/db');

const Cidade = {
    getAllCidades: async () => {
        try {
            const query = 'SELECT * FROM Cidade';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    createNewCidade: async (nomeCidade,UF) => {
        try {
            const query = 'INSERT INTO Cidade (nomeCidade, UF) VALUES ($1, $2) RETURNING *';
            const values = [nomeCidade, UF];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Cidade;