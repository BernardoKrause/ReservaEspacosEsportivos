const Pool  = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'reservaespacosdb',
    password: 'bernardo',
    port: 5433,
});

module.exports = pool; 