// make connection with database
const { password } = require('./dbpassword.js');
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: `${password}`,
  database: 'gList',
});

dbConnection.connect();

module.exports = dbConnection;