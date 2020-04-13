const db = require('../db');

const getLocation = (id, callback) => {
  db.query(`SELECT * FROM locations WHERE location_id = $1`, [id], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { getLocation };
