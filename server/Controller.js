const Models = require('./Models.js');

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
  getLocation
};
