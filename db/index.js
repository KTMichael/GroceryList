// make connection with database
const mysql = require('mysql');
const { password } = require('./dbpassword.js');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: `${password}`,
  database: 'gList'
});

dbConnection.connect();

module.exports = dbConnection;