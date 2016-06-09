
var Point = require('../models/points.js');

var indexController = {
	allPoints: function(req, res){
		Point.find({}, (err, results)=>{
			console.log('point find err ', err);
			res.render('index', 
			{data : results}
			);
		})
	}
}

module.exports = indexController;