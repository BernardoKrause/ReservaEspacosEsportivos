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
    }
};

module.exports = TipoEspaco;