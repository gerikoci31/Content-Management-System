const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cms_db',
  password: 'Anac0ndA',
  port: 5432, 
});

module.exports = pool;
