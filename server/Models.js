const db = require('../db');

const getLocation = (id, cb) => {
  db.query(`SELECT * FROM locations WHERE id = ${id}`, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  getLocation
};
