const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const apiController = require('./controllers/api.js');
const indexController = require('./controllers/indexController.js');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

//connect to DB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/where_Is_Sark');

//routes
app.get('/', indexController.allPoints);
app.get('/api/lastPoint', apiController.getLastPoint);


// console.log(new Date(), 'Listening on 8888');
// app.listen(8888);
var port = process.env.PORT || 8888;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});