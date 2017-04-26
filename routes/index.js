var express = require('express');

var path = require('path');
var router = express.Router();

var mongoose = require('mongoose');
var Album = require('../models/Album.js');
var Song = require('../models/Song.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Music App' });
});

router.get('/api/albums', function(req, res, next) {
	Album.find(function(err, albums) {
		if(err) return next(err);
		res.json(albums);
	});
});

router.get('/api/album/:id', function(req, res, next) {
	Album.findById(req.params.id)
		 .populate('songs')
		 .exec(function(err,album) {
		 	res.json(album);
		 });

});

module.exports = router;
