const Models = require('./Models.js');

const getFirstReservations = (req, res) => {
  Models.getFirstReservations((err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = { getFirstReservations };
