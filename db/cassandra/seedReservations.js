const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const reservationWriter = createCsvWriter({
  path: './data/cassreservations.csv',
  header: [
    { id: 'location_id', title: 'location_id' },
    { id: 'location_address', title: 'location_address' },
    { id: 'rate', title: 'rate' },
    { id: 'review_avg', title: 'review_avg' },
    { id: 'total_review', title: 'total_review' },
    { id: 'service_fee', title: 'service_fee' },
    { id: 'occupancy_tax', title: 'occupancy_tax' },
    { id: 'reservation_id', title: 'reservation_id' },
    { id: 'checkin_date', title: 'checkin_date' },
    { id: 'checkout_date', title: 'checkout_date' },
    { id: 'adults', title: 'adults' },
    { id: 'children', title: 'children' },
    { id: 'infants', title: 'infants' },
    { id: 'price', title: 'price' },
    { id: 'user_id', title: 'user_id' },
    { id: 'username', title: 'username' },
  ]
});

const randRange = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const uniqueTotal = 10;

let userCount = 1;
let locationCount = 1;
let reservationCount = 1;

const generateReservations = () => {
  const reservations = [];

  for (let i = 0; i < uniqueTotal; i++) {
    const location_id = locationCount++;
    const location_address = `${faker.address.streetAddress()}, ${faker.address.city()}`;
    const rate = randRange(20, 100);
    const review_avg = (Math.random() * 5).toFixed(2);
    const total_review = randRange(50, 500);
    const service_fee = randRange(5, 10);
    const occupancy_tax = randRange(1, 8);
    for (let j = 0; j < Math.floor((Math.random() * 5) + 5); j++) {
      const reservation_id = reservationCount++;
      const checkin_date = `2020-${j + 1}-${randRange(1, 14)}`;
      const checkout_date = `2020-${j + 1}-${randRange(15, 28)}`;
      const adults = randRange(1, 5);
      const children = randRange(0, 5);
      const infants = randRange(0, 5);
      const price = randRange(100, 2000);
      const user_id = userCount++;
      const username = faker.internet.userName();

      const reservation = {
        location_id,
        location_address,
        rate,
        review_avg,
        total_review,
        service_fee,
        occupancy_tax,
        reservation_id,
        checkin_date,
        checkout_date,
        adults,
        children,
        infants,
        price,
        user_id,
        username,
      };
      reservations.push(reservation);
      bar.increment();
    }
  }
  return reservations;
};

const total = 2;
let count = 0;

const writeReservations = () => {
  let data = generateReservations();
  if (count < total) {
    reservationWriter.writeRecords(data)
      .then(() => {
        count++;
        writeReservations();
      })
      .catch(() => {
        console.log('cry, error in csv writing AS ALWAYS (╯°□°）╯︵ ┻━┻');
      });
  } else {
    bar.stop();
    console.log('zoom zoom zoom please aka cass reservations');
  }
};

bar.start(total, 0);
writeReservations();
