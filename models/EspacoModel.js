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
    }
};

module.exports = Espaco;