/**
 * Conecta o banco de dados com o servidor
 */
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '123',
    host: 'ec2-100-26-236-150.compute-1.amazonaws.com',
    port: 5432,
    database:'perntodo',
});

module.exports = pool;