const db = require('../config/db');

const Tipo = {
    getAllTipos: async () => {
        try {
            const query = 'SELECT * FROM Tipo';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },
    getTipo: async (id) => {
        try {
            const query = `SELECT * FROM Tipo WHERE codTipo = ${id}`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    }
};

module.exports = Tipo;