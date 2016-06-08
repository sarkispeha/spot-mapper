const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const apiController = require('./controllers/api.js');
const mongoose = require('mongoose');

var app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))

//connect to DB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/where_Is_Sark');

//routes
app.get('/', (req, res) =>{
	res.render('index')
})

console.log(new Date(), 'Listening on 8888');
app.listen(8888);