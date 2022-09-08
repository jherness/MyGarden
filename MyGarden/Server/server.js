/* jshint esversion:6*/ 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { ConnectionSettings } = require('./ServerSettings');




const connection = mysql.createPool(ConnectionSettings);
const app = express();

app.get('/samples', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM samples;', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000);