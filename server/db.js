/**
 * Conecta o banco de dados com o servidor
 */
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '',
    host: '',
    port: 5432,
    database:'perntodo'
});

module.exports = pool;
