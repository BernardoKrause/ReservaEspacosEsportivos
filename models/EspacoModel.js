const db = require('../config/db');

const Espaco = {
    getAllEspacos: async () => {
        try {
            const query = 'SELECT en.logradouro, en.bairro, en.numeroEndereco, es.nomeEspaco, es.horarioAbertura, es.horarioFechamento, es.capacidade FROM Espaco es JOIN Endereco en ON es.codEndereco = en.codEndereco';
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },
    getEspaco: async (id) => {
        try {
            const query = `SELECT * FROM Espaco WHERE codEspaco = ${id}`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    },

    selectByTipo: async (codTipoEspaco) => {
        try {
            const query = `SELECT * FROM Espaco JOIN TipoEspaco ON Espaco.codEspaco = TipoEspaco.codEspaco WHERE codTipoEspaco = ${codTipoEspaco}`;
            const result = await db.query(query);
            return result.rows;
        } catch (err) {
            throw err;
        }
    },

    selectByCapacidade: async (capacidade) => {
        try{
            const query = `SELECT * FROM Espaco WHERE capacidade >= ${capacidade}`
        }catch(err){
            throw err;
        }
    }
};

module.exports = Espaco;