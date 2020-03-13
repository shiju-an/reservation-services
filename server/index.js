const express = require('express');
const Controller = require('./Controller.js');

const app = express();
const port = 3000;

app.use(express.static('client/dist'));

app.get('/reservations', (req, res) => {
  Controller.getAllReservations(req, res);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
