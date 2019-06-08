const Availability = require('../db');

const find = id => Availability.findOne({ where: { id } });

const update = (id, payload) => Availability.update(payload, { where: { id } });

const insert = payload => Availability.create(payload);

const remove = id => Availability.destroy({ where: { id }});

module.exports = {
  find,
  update,
  insert,
  remove
}