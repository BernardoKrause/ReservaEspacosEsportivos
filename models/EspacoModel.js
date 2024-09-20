const db = require('../config/db');

const Espaco = {
    getAllEspacos: async () => {
        try {
            const query = 'SELECT * FROM Espaco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    createNewEspaco: async (nomeEspaco, horarioAbertura, horarioFechamento, capacidade, codEndereco) => {
        try {
            const query = 'INSERT INTO espaco (nomeEspaco,horarioAbertura,horarioFechamento,capacidade,codEndereco) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [nomeEspaco, horarioAbertura, horarioFechamento, capacidade, codEndereco];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Espaco;