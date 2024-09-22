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
    getTipoEspaco: async (id) => {
        try {
            const query = `SELECT * FROM TipoEspaco WHERE codTipoEspaco = ${id}`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    }
};

module.exports = TipoEspaco;