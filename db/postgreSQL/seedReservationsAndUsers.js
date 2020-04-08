const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const cliProgress = require('cli-progress');

const writer = csvWriter();
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const randRange = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const seedReservationsAndUsers = () => {
  writer.pipe(fs.createWriteStream('reservationsAndUsersData.csv'));
  bar.start(10000000, 0);

  for (let i = 0; i < 10000000; i++) {
    for (let j = 0; j < Math.floor((Math.random() * 5) + 5); j++) {
      writer.write({
        reservation_id: j,
        checkin: `2020-${j + 1}-${randRange(1, 14)}`,
        checkout: `2020-${j + 1}-${randRange(15, 28)}`,
        adults: randRange(1, 5),
        children: randRange(0, 5),
        infants: randRange(0, 5),
        price: randRange(100, 2000),
        user_id: j,
        username: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
    bar.update(i);
  }
  bar.stop();
  writer.end();
  console.log('???? csv writing who knows FOR RESERVATIONS???');
};

seedReservationsAndUsers();

//csv writer

//native javascript

//could be writing a lot of times
//faker functions super expensive
//memory management
//overload harddisc if dont have space
// under an hour or two
// decrease amount of writing to file
// write in bulk
// increase speed