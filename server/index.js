/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./Controller.js');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// reservations
app.get('/reservation/api/reservations', (req, res) => {
  Controller.getFirstReservations(req, res);
});

// locations
app.get('/reservation/api/location', (req, res) => {
  Controller.getLocation(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
