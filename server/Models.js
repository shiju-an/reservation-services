const db = require('../db');

const getFirstReservations = (id, cb) => {
  db.query(`SELECT * FROM reservations WHERE location_id = ${id}`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  getFirstReservations,
}