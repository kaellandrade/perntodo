/**
 * Conecta o banco de dados com o servidor
 */
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '123',
    host: '54.236.54.32',
    port: 5432,
    database:'perntodo',
});

module.exports = pool;