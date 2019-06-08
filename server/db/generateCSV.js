const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');

String.prototype.splice = function(start, delCount, replacement) {
  return this.slice(0, start) + replacement + this.slice(start + Math.abs(delCount));
};

const seats = () => faker.random.number({
  min: 2,
  max: 10,
});

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

const dataGen = async () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (let i = 0; i < 1e7; i++) {
    if(!writer.write({
      id: i,
      name: faker.lorem.word() + (i / 1e7).toString(16).replace(/[^a-z]+/g, ''),
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
    })) {
      await new Promise(resolve => writer.once('drain', resolve));
      console.log('drained')
    }
    console.log('seeding ' + i);
  }

  writer.end();
  console.log('done');
}

dataGen();