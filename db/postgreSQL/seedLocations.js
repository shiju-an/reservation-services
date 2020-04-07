const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const randRange = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const seedLocations = () => {
  writer.pipe(fs.createWriteStream('locationsData.csv'));

  for (let i = 0; i < 1000; i++) {
    writer.write({
      location_id: i,
      location_address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}'),
      rate: randRange(20, 100),
      reviewAvg: (Math.random() * 5).toFixed(2),
      totalReview: randRange(50, 500),
      serviceFee: randRange(5, 10),
      occupancyTax: randRange(1, 8),
    });
  }
  console.log('???? csv writing who knows FOR LOCATIONS???');
  writer.end();
};

seedLocations();