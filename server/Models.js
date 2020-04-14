const db = require('../db');

const getFirstReservations = (id, callback) => {
  db.query(`SELECT * FROM reservations WHERE location_id = $1`, [id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getLocation = (id, callback) => {
  db.query('SELECT * FROM locations WHERE location_id = $1', [id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addReservation = (data, callback) => {
  db.query('INSERT INTO reservations (checkin_date, checkout_date, adults, children, infants, price, location_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, (SELECT location_id from locations WHERE location_id = $8), (SELECT user_id from users WHERE user_id = $9))', [data.checkin, data.checkout, data.adults, data.children, data.infants, data.price, data.locationId, data.userId], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getFirstReservations,
  getLocation,
  addReservation,
};
