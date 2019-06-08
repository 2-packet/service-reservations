const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'sdc' });

client.connect()
  .then(() => client.execute(`DROP TABLE IF EXISTS reservations`))
  .then(() => client.execute(`CREATE TABLE reservations(id int PRIMARY KEY, name text, booked tinyint, "6:00 PM" tinyint, "6:15 PM" tinyint, "6:30 PM" tinyint, "6:45 PM" tinyint, "7:00 PM" tinyint, "7:15 PM" tinyint, "7:30 PM" tinyint, "7:45 PM" tinyint, "8:00 PM" tinyint, "8:15 PM" tinyint, "8:30 PM" tinyint)`))
  .then(() => {
    console.log('begin seeding.');
    return client.execute(`COPY reservations FROM '/home/umairnadeem/Documents/hack reactor/gits/sdc/service-reserverations/data.csv' WITH DELIMITER ',' HEADER = TRUE`)
  })
  .then(() => console.log('done seeding.'));