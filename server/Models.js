const db = require('../db');

const getAllReservations = (callback) => {
  db.query('SELECT * FROM reservations', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { getAllReservations };
