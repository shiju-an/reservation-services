const Models = require('./Models.js');

const getAllReservations = (req, res) => {
  Models.getAllReservations((err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = { getAllReservations };
