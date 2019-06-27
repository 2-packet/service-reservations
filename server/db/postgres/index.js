const { Pool } = require('pg');

// const connection = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'sdc',
//   password: 'umairnadeem',
//   port: '5432'
// };

const connection = {
  connectionString: `postgres://postgres:umairnadeem@18.208.154.74:5432/sdc`
};

module.exports = new Pool(connection);






