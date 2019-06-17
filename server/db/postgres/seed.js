const pool = require('./index');

pool.query(`DROP TABLE IF EXISTS reservations`)
  .then(() => pool.query(`CREATE TABLE reservations(id SERIAL PRIMARY KEY, name VARCHAR(50) , booked smallint , "6:00 PM" smallint , "6:15 PM" smallint , "6:30 PM" smallint , "6:45 PM" smallint , "7:00 PM" smallint , "7:15 PM" smallint , "7:30 PM" smallint , "7:45 PM" smallint , "8:00 PM" smallint , "8:15 PM" smallint , "8:30 PM" smallint )`))
  .then(() => {
    console.log('Begin seeding...')
    return pool.query(`COPY reservations FROM '/home/ec2-user/service-reservations/data.csv' WITH DELIMITER ',' CSV HEADER`);
  })
  .then(() => {
    pool.query(`SELECT setval('reservations_id_seq', (SELECT MAX(id) FROM reservations)+1)`);
    console.log('Done seeding.');
  });