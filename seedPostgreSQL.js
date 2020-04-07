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
  writer.end();
  console.log('???? csv writing who knows FOR LOCATIONS???')
};

const seedReservationsAndUsers = () => {
  writer.pipe(fs.createWriteStream('reservationsAndUsersData.csv'));

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < Math.floor((Math.random() * 5) + 5); j++) {
      writer.write({
        reservation_id: j,
        checkin: `2020-${j + 1}-${randRange(1, 14)}`,
        checkout: `2020-${j + 1}-${randRange(15, 28)}`,
        adults: randRange(1, 5),
        children: randRange(0, 5),
        infants: randRange(0, 5),
        price: randRange(100, 2000),
        user_id: i,
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
  }
  writer.end();
  console.log('???? csv writing who knows FOR RESERVATIONS???')
};

seedLocations();
seedReservationsAndUsers();
