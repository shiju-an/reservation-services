const db = require('../db');

const getLocation = (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * FROM locations WHERE location_id = $1', [id], (err, data) => {
    if (err) {
      console.log('big error mayday');
    }
    res.status(200).json(data.rows);
  })
}

module.exports = {
  getLocation
}