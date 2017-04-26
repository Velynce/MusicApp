var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
	image: String,
	title: String,
	artist: String,
	description: String,
	year: String,
	label: String,
	producer: String,
	genre: [String],
	songs:[{type:mongoose.Schema.Types.ObjectId, ref:'Song'}]
});

module.exports = mongoose.model('Album', albumSchema);