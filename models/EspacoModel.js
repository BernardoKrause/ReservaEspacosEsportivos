const db = require('../config/db');

const Espaco = {
    getAllEspacos: async () => {
        try {
            const query = 'SELECT en.logradouro, en.bairro, en.numeroEndereco, es.codEspaco, es.nomeEspaco, es.horarioAbertura, es.horarioFechamento, es.capacidade FROM Espaco es JOIN Endereco en ON es.codEndereco = en.codEndereco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },
    getAllNomeEspacos: async () => {
        try {
            const query = 'SELECT codEspaco, nomeEspaco FROM Espaco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    getEspaco: async (id) => {
        try {
            const query = `SELECT en.logradouro, en.bairro, en.numeroEndereco, es.nomeEspaco, es.horarioAbertura, es.horarioFechamento, es.capacidade FROM Espaco es JOIN Endereco en ON es.codEndereco = en.codEndereco WHERE codEspaco = ${id}`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    },

    selectByTipo: async (codTipo) => {
        try {
            const query = `SELECT en.logradouro, en.bairro, en.numeroEndereco, es.nomeEspaco, es.horarioAbertura, es.horarioFechamento, es.capacidade FROM Espaco es JOIN Endereco en ON es.codEndereco = en.codEndereco WHERE es.codEspaco IN (SELECT te.codEspaco FROM TipoEspaco te WHERE te.codTipo = ${codTipo})`;
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    selectByCapacidade: async (capacidade) => {
        try{
            const query = `SELECT en.logradouro, en.bairro, en.numeroEndereco, es.nomeEspaco, es.horarioAbertura, es.horarioFechamento, es.capacidade FROM Espaco es JOIN Endereco en ON es.codEndereco = en.codEndereco WHERE capacidade >= ${capacidade}`
            const result = await db.query(query);
            return result.rows;
        }catch(err){
            throw err;
        }
    }
};

module.exports = Espaco;