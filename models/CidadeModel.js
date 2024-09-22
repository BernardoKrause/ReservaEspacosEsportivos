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
    }
};

module.exports = Cidade;