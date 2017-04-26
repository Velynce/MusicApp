var mongoose = require('mongoose');

var songsSchema = new mongoose.Schema({
	number: String,
	title: String,
	length: String,
	album:{type:mongoose.Schema.Types.ObjectId, ref:'Album'}
});

module.exports = mongoose.model('Song', songsSchema);