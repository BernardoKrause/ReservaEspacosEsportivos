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
    },

    getAllTiposbyEspaco: async (idEspaco) => {
        try {
            const query = `SELECT te.codTipo, ti.nomeTipo FROM TipoEspaco te JOIN Tipo ti ON te.codTipo = ti.codTipo WHERE te.codEspaco = ${idEspaco}`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    },

    getAllTiposbyNomeEspaco: async (nomeEspaco) => {
        try {
            const query = `SELECT te.codTipo, ti.nomeTipo FROM TipoEspaco te JOIN Tipo ti ON te.codTipo = ti.codTipo JOIN Espaco es ON te.codEspaco = es.codEspaco WHERE UPPER(es.nomeEspaco) = UPPER(${nomeEspaco})`
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw err;
        }
    }
};

module.exports = Tipo;