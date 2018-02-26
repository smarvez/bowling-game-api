'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use((req, res, next) => {
  res.sendStatus(404)
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err.message})
})

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
