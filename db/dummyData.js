/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
// const dateFaker = require('date-faker');
// const faker = require('faker');
const db = require('./index.js');


// random num between range, takes in a max and a min
const randRange = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// 100 homes helper
const seedLocations = () => {
  for (let i = 0; i < 10; i++) {
    let rate = randRange(20, 100);
    let reviewAvg = (Math.random() * 5).toFixed(2);
    let totalReview = randRange(50, 200);
    let serviceFee = randRange(5, 10);
    let occupancyTax = randRange(1, 8);

    db.query(`INSERT INTO locations (rate, review_avg, total_review, service_fee, occupancy_tax) VALUES (${rate}, ${reviewAvg}, ${totalReview}, ${serviceFee}, ${occupancyTax})`, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('seeded properly');
      }
    });
  }
};

// const seedReservations = () => {

// };


// console.log(randRange(10, 50));
seedLocations();
// seedReservations();
console.log('done');
