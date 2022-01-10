// make connection with database
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'Kmpg1822.',
  database: 'gList'
});

dbConnection.connect();

module.exports = dbConnection;