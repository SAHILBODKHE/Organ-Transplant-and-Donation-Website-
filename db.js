const { Pool } = require('pg')
// const pool = new Pool({

//   user: 'postgres',
//   password: 'Sahil@264',
//   host: 'localhost',
//   port: 5432,
//   database: 'orgtrans',
// })
const pool = new Pool({
  database: 'railway',
  host: 'containers-us-west-139.railway.app',
  password: 'TmW13hTdhpSIJox1GLB8',
  port: 7324,
  user: 'postgres',
})
module.exports = pool
