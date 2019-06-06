const { Pool } = require('pg');

const connection = {
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'umairnadeem',
  port: '5432'
};

const pool = new Pool(connection);

pool.query(`DROP TABLE IF EXISTS reservations`)
  .then(() => pool.query(`CREATE TABLE reservations(id SERIAL PRIMARY KEY, name VARCHAR(50) , booked smallint , "6:00 PM" smallint , "6:15 PM" smallint , "6:30 PM" smallint , "6:45 PM" smallint , "7:00 PM" smallint , "7:15 PM" smallint , "7:30 PM" smallint , "7:45 PM" smallint , "8:00 PM" smallint , "8:15 PM" smallint , "8:30 PM" smallint )`))
  .then(() => {
    console.log('Begin seeding...')
    pool.query(`COPY reservations FROM '/home/umairnadeem/Documents/hack reactor/gits/sdc/service-reserverations/data.csv' WITH DELIMITER ',' CSV HEADER`);
  })
  .then(() => {
    console.log('Done seeding.');
  });




