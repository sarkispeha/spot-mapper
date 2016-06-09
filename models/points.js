var mongoose = require('mongoose');

var pointSchema = mongoose.Schema({
	message_id: Number,
	lat: Number,
	long: Number
});

module.exports = mongoose.model('point', pointSchema);