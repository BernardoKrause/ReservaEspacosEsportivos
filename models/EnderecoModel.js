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
    },

    createNewEndereco: async (logradouro, bairro, CEP, numeroEndereco, complementoEndereco) => {
        try {
            const query = 'INSERT INTO endereco (logradouro, bairro, CEP, numeroEndereco, complementoEndereco) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [logradouro, bairro, CEP, numeroEndereco, complementoEndereco];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
};

module.exports = Endereco;