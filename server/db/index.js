const Sequelize = require('sequelize');

// change user: 'root' and password: 'password' with your credentials
const sequelize = new Sequelize('sdc', 'postgres', 'umairnadeem', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 1,
    min: 0,
    acquire: 1000,
    idle: 1000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('db connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const Reservations = sequelize.define('reservations',
  {
    name: {
      type: Sequelize.STRING,
    },
    booked: {
      type: Sequelize.INTEGER,
    },
    '6:00 PM': {
      type: Sequelize.INTEGER,
    },
    '6:15 PM': {
      type: Sequelize.INTEGER,
    },
    '6:30 PM': {
      type: Sequelize.INTEGER,
    },
    '6:45 PM': {
      type: Sequelize.INTEGER,
    },
    '7:00 PM': {
      type: Sequelize.INTEGER,
    },
    '7:15 PM': {
      type: Sequelize.INTEGER,
    },
    '7:30 PM': {
      type: Sequelize.INTEGER,
    },
    '7:45 PM': {
      type: Sequelize.INTEGER,
    },
    '8:00 PM': {
      type: Sequelize.INTEGER,
    },
    '8:15 PM': {
      type: Sequelize.INTEGER,
    },
    '8:30 PM': {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  });

module.exports = Reservations;
