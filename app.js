const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', (req, res) =>{
	res.render('index')
})

console.log(new Date(), 'Listening on 8888');
app.listen(8888);