var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var db;
var db_url = "mongodb://"+process.env.IP+":27017";

var Task = require('models/Task.js');

mongoose.connect(db_url+"/node-cw9");
mongoose.connection.on('error', function(){
  console.log('Aloha Snackbar');
});

server.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server running');
});