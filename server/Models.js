const db = require('../db');

const getFirstReservations = (callback) => {
  db.query('SELECT * FROM reservations WHERE locationId = 1', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { getFirstReservations };
