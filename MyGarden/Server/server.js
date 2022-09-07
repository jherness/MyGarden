/* jshint esversion:6*/ 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'mygarden'
});

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
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/samples so you can see the data.');
});