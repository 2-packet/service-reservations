const { Pool } = require('pg');

// const connection = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'sdc',
//   password: 'umairnadeem',
//   port: '5432'
// };

const connection = {
  connectionString: `postgres://postgres:umairnadeem@52.90.170.135:5432/sdc`
};

module.exports = new Pool(connection);






