const db = require('../config/db');

const TipoEspaco = {
    getAllTipoEspacos: async () => {
        try {
            const query = 'SELECT * FROM TipoEspaco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    createNewTipoEspaco: async (nome, codEspaco) => {
        try {
            const query = 'INSERT INTO TipoEspaco (nome, codEspaco) VALUES ($1, $2) RETURNING *';
            const values = [nome, codEspaco];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
};

module.exports = TipoEspaco;