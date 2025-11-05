'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
var PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET /hello
app.get('/hello', function(req, res) {
  var name = req.query.name || 'Guest';
  res.send('hello ' + name);
});

// PUT /travellers
app.put('/travellers', function(req, res) {
  var surname = req.body.surname;
  var response = {};

  if (surname === 'Colombo') {
    response = { name: 'Cristoforo', surname: 'Colombo', dates: '1451 - 1506' };
  } else if (surname === 'da Verrazzano') {
    response = { name: 'Giovanni', surname: 'da Verrazzano', dates: '1485 - 1528' };
  } else if (surname === 'Vespucci') {
    response = { name: 'Amerigo', surname: 'Vespucci', dates: '1454 - 1512' };
  }

  res.json(response);
});

// POST /travellers (for form submit, if needed)
app.post('/travellers', function(req, res) {
  var surname = req.body.surname;
  var response = {};

  if (surname === 'Colombo') response = { name: 'Cristoforo', surname: 'Colombo' };
  else if (surname === 'da Verrazzano') response = { name: 'Giovanni', surname: 'da Verrazzano' };
  else if (surname === 'Vespucci') response = { name: 'Amerigo', surname: 'Vespucci' };

  res.json(response);
});

// Serve HTML
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Start server
var server = app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

module.exports = server; // Export server for chai-http and Zombie.js
