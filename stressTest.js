const axios = require('axios');
var faker = require('faker');

let port = 3000;

const seats = () => faker.random.number({
  min: 2,
  max: 10,
});

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

const request = (type, id = 0) => {
  if (type === 'GET') {
    return axios.get(`http://localhost/${id + 1}`);
  } else if (type === 'POST') {
      return axios.post(`http://localhost/api/reservations`, {
        name: faker.lorem.word() + Math.random().toString(16).replace(/[^a-z]+/g, ''),
        booked: booked(),
        '6:00 PM': seats(),
        '6:15 PM': seats(),
        '6:30 PM': seats(),
        '6:45 PM': seats(),
        '7:00 PM': seats(),
        '7:15 PM': seats(),
        '7:30 PM': seats(),
        '7:45 PM': seats(),
        '8:00 PM': seats(),
        '8:15 PM': seats(),
        '8:30 PM': seats(),
      });
  } else if (type === 'PUT') {
      return axios.put(`http://localhost/api/${id+1}/reservations`, {
        id: id + 1,
        name: faker.lorem.word() + Math.random().toString(16).replace(/[^a-z]+/g, ''),
        booked: booked(),
        '6:00 PM': seats(),
        '6:15 PM': seats(),
        '8:30 PM': seats(),
      });
  } else if (type === 'DELETE') {
    return axios.delete(`http://localhost/${id + 1}/reservations`)
  }
}

// Post request test
const stress = (type, rps) => {
  console.log(`Serving request type ${type} with ${rps} rps`);
  let id = 0;
  let errors = 0;
  setInterval(() => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    request(type, id)
      .catch(err => process.stdout.write(`  Error ************************`));
    process.stdout.write(`  Sent request: #${id}`);
    id++;
  }, 1000/rps);
};

stress('GET', 1000);