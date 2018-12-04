var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var db;
var db_url = "mongodb://" + process.env.IP + ":27017";

var Task = require('./models/Task.js');

// db name is node-cw9
mongoose.connect(db_url + "/node-cw9");
mongoose.connection.on('error', function() {
    console.log('Aloha Snackbar');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
    response.render('index.ejs');
});

app.post('/task/create', function(request, response) {
    var new_task = new Task(request.body);
    new_task.save(function(err, data) {
        console.log(data);
        if (err)
            return response.status(400).json({ error: "Something went wrong" });
        console.log(data);
        return response.status(200).json({ message: "Task added successfully created!" });
    });
});


app.get('/task/list', function(request, response) {
    response.render('list.ejs');
});


server.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server running');
});