// const Reservations = require('../db');

// const find = id => Reservations.findOne({ where: { id } });

// const update = (id, payload) => Reservations.update(payload, { where: { id } });

// const insert = payload => Reservations.create(payload);

// const remove = id => Reservations.destroy({ where: { id }});

const pool = require('../db/postgres');

const find = id => pool.query(`SELECT * FROM reservations WHERE id = $1`, [id]);

const update = (id, payload) => {
  let values = Object.keys(payload).filter(key => key.includes('PM')).map(elem => payload[elem]);
  values.push(id);
  return pool.query(`UPDATE reservations SET "6:00 PM" = $1, "6:15 PM" = $2, "6:30 PM" = $3, "6:45 PM" = $4, "7:00 PM" = $5, "7:15 PM" = $6, "7:30 PM" = $7, "7:45 PM" = $8, "8:00 PM" = $9, "8:15 PM" = $10, "8:30 PM" = $11 WHERE id = $12`, values);
};

const insert = (payload) => {
  let values = Object.keys(payload).filter(key => key.includes('PM')).map(elem => payload[elem]);
  values.push(payload.name, payload.booked);
  return pool.query(`INSERT INTO reservations("6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM", "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM", "8:30 PM", "name", "booked") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, values);
};

const remove = id => pool.query(`DELETE FROM reservations WHERE id = $1`, [id]);

module.exports = {
  find,
  update,
  insert,
  remove
};