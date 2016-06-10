'use strict'

const Point = require('../models/points.js');

const api = {
	savePoint: (req, res)=>{
		var pointData = req.body;
		var newPoint = new Point(pointData);
		newPoint.save(function(err, result){
			console.log('this is the save to db err: ', err);
			res.send(result);
		})
	},
	getLastPoint: (req, res)=>{
		Point.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec(function(err, result){
		// Point.findOne({}).sort({created_at: -1}).exec(function(err, result){
			console.log('Last point find err ', err);
			console.log('this is the result from the getLastPoint API', result)
			res.send(result);
		})
	}
	// getAllPoints: function(req, res){
	// 	Point.find({}, (err, results)=>{
	// 		console.log('point find err ', err);
	// 		res.send(results);
	// 	})
	// }
}

module.exports =  api;