const { Pool } = require('pg');

const connection = {
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'umairnadeem',
  port: '5432'
};

module.exports = new Pool(connection);






