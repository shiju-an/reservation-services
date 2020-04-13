const Models = require('./Models.js');

const getLocation = (req, res) => {
  const { id } = req.query;
  Models.getLocation(id, (err, data) => {
    if (err) {
      res.status(404).send('cant find 404 missing');
    } else {
      res.send(data);
    }
  });
};

module.exports = {
  getLocation
};
