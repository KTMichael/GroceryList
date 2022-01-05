const db = require('../db');

const models = {

  //get
  get: (callback) => {
    const queryString = 'SELECT * FROM groceryList';
    db.query(queryString, (error, results) => {
      if (error) {
        console.log('error', error);
        callback(error, null);
      } else {
        console.log('results', results);
        callback(null, results);
      }
    });
  },

  //post/add
  add: (item, callback) => {
    const queryString = 'INSERT INTO groceryList (name, quantity) VALUES (?,?)';
    const values = [item.name, item.quantity];
    db.query(queryString, values, (error, results) => {
      if (error) {
        //console.log(error);
        callback(error, null);
      } else {
        //console.log(results);
        callback(null, results);
      }
    });
  },

  // delete
  delete: (item, callback) => {
    const queryString = 'DELETE FROM groceryList WHERE name = ?';
    const value = [item.name];
    db.query(queryString, value, (error, results) => {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
};

module.exports = models;