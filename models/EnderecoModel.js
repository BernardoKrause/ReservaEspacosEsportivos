const db = require('../config/db');

const Endereco = {
    getAllEnderecos: async () => {
        try {
            const query = 'SELECT * FROM Endereco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Endereco;