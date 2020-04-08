const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const bar2 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const reservationWriter = createCsvWriter({
  path: './data/reservations.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'reservation_id', title: 'reservation_id' },
    { id: 'checkin_date', title: 'checkin_date' },
    { id: 'checkout_date', title: 'checkout_date' },
    { id: 'adults', title: 'adults' },
    { id: 'children', title: 'children' },
    { id: 'infants', title: 'infants' },
    { id: 'price', title: 'price' },
  ]
});

const userWriter = createCsvWriter({
  path: './data/users.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'user_id', title: 'user_id' },
    { id: 'username', title: 'username' },
    { id: 'email', title: 'email' },

  ]
});

const uniqueTotal = 10000;
const reservations = [];
const users = [];

const generateReservationsAndUsers = () => {
  const randRange = (min, max) => Math.floor((Math.random() * (max - min)) + min);

  for (let i = 0; i < uniqueTotal; i++) {
    for (let j = 0; j < Math.floor((Math.random() * 5) + 5); j++) {
      const reservation_id = j;
      const checkin_date = `2020-${j + 1}-${randRange(1, 14)}`;
      const checkout_date = `2020-${j + 1}-${randRange(15, 28)}`;
      const adults = randRange(1, 5);
      const children = randRange(0, 5);
      const infants = randRange(0, 5);
      const price = randRange(100, 2000);

      const user_id = j;
      const username = faker.internet.userName();
      const email = faker.internet.email();

      const reservation = {
        location_id: i,
        reservation_id,
        checkin_date,
        checkout_date,
        adults,
        children,
        infants,
        price
      };
      reservations.push(reservation);

      const user = {
        user_id,
        username,
        email,
      };
      users.push(user);
    }
  }
  return [reservations, users];
};

const total = 1000;
let count = 0;
const data = generateReservationsAndUsers();

const writeReservations = () => {
  if (count < total) {
    reservationWriter.writeRecords(data[0])
      .then(() => {
        count++;
        bar1.increment();
        writeReservations();
      })
      .catch(() => {
        console.log('cry, error in csv writing AS ALWAYS');
      });
  } else {
    bar1.stop();
    console.log('PLEASE BE FAST LIKE SPEED RACER ALSO IS RESERVATIONS SPLIT??');
    count = 0;
    bar2.start(total, 0);
    writeUsers();
  }
};

const writeUsers = () => {
  if (count < total) {
    userWriter.writeRecords(data[1])
      .then(() => {
        count++;
        bar2.increment();
        writeUsers();
      })
      .catch(() => {
        console.log('cry, error in csv writing AS ALWAYS');
      });
  } else {
    bar2.stop();
    console.log('PLEASE BE FAST LIKE SPEED RACER ALSO IS USERS SPLIT??');
  }
};

bar1.start(total, 0);
writeReservations();

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
