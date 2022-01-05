const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const models = require('./models');
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(cors());
app.use(express.json());
app.use(express.static('../client'));

app.use(morgan('dev'));

app.get('/gList', (req, res) => {
  models.get((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(results);
    }
  });
});

app.post('/gList', (req, res) => {
  models.add(req.body, (error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send();
    }
  });
});

app.delete('/gList', (req, res) => {
  models.delete(req.body, (error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send();
    }
  });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});