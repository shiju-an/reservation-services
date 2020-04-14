const db = require('../db');

const getFirstReservations = (id, callback) => {
  db.query(`SELECT * FROM reservations WHERE location_id = $1`, [id], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const getLocation = (id, callback) => {
  db.query('SELECT * FROM locations WHERE location_id = $1', [id], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const addReservation = (data, callback) => {
  const id = parseInt(data.params.id);
  const { checkin, checkout, adults, children, infants, price, userId } = data.body;

  db.query('INSERT INTO reservations (checkin_date, checkout_date, adults, children, infants, price, location_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, (SELECT location_id from locations WHERE location_id = $8), (SELECT user_id from users WHERE user_id = $9))', [checkin, checkout, adults, children, infants, price, id, userId], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

const updateReservation = (data, res) => {
  const id = parseInt(data.params.id);
  const { checkin, checkout, adults, children, infants, price, resId } = data.body;

  db.query('UPDATE reservations SET checkin = $1, checkout = $2, adults = $3, children = $4, infants = $5, price = $6 WHERE (location_id = id AND reservation_id = $7)', [checkin, checkout, adults, children, infants, price, resId], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  getFirstReservations,
  getLocation,
  addReservation,
  updateReservation,
};
