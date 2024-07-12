const { Pool } = require('pg');

const pool = new Pool({
  user: 'gerik',
  host: 'localhost',
  database: 'database',
  password: 'Anac0ndA',
  port: 5432, 
});

module.exports = pool;