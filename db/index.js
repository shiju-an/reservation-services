const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'power_user',
  host: '13.56.196.60',
  database: 'relaxly_pj3',
  password: '$poweruserpassword',
  port: 5432,
});

pool.query('SELECT 1 + 1 AS solution', (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log('hi its pg13 and ITS CONNECTED PROBABLY HOPEFULLY MAYBE');
});

module.exports = pool;
