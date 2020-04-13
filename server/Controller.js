const Models = require('./Models.js');

const getFirstReservations = (req, res) => {
  const id = parseInt(req.params.id);
  Models.getFirstReservations(id, (err, data) => {
    if (err) {
      console.log('big res error mayday x 2');
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getLocation = (req, res) => {
  const id = parseInt(req.params.id);

  Models.getLocation(id, (err, data) => {
    if (err) {
      console.log('big error mayday');
    } else {
      res.status(200).send(data.rows);
    }
  });
};

module.exports = {
  getFirstReservations,
  getLocation
};