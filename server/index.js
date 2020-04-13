const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Controller = require('./queries.js');

const app = express();
const port = 3000;

app.use(cors());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// reservations
// app.get('/reservation/api/reservations', (req, res) => {
//   Controller.getFirstReservations(req, res);
// });

// locations
// app.get('/reservation/api/location/', (req, res) => {
//   Controller.getLocation(req, res);
// });

// locations
app.get('/location/:id', Controller.getLocation
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.listen(port, () => console.log(`hello come in am listening @ ${port} high five`));
