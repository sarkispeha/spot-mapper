var mongoose = require('mongoose');

var pointSchema = mongoose.Schema({
	lat: Number,
	long: Number
});

module.exports = mongoose.model('point', pointSchema);