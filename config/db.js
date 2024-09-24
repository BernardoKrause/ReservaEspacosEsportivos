const Pool  = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ReservaEspacos',
    password: 'Neguim03',
    port: 5432,
});

module.exports = pool; 