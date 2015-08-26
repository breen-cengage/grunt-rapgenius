var rapgeniusPlugin = function(options, done) {
	var artists = (options && options.artists) || require('../artists.json'),
        artistIndex = Math.floor(Math.random() * artists.length),
        singleVerse = options.singleVerse || true;

    artist = artists[artistIndex];
	var rapgeniusPrinter = require('./rapgeniusprinter.js')(console.log, done, singleVerse);
	var rapgeniusClient = require('rapgenius-js');

	rapgeniusClient.searchArtist(artist, 'rap', rapgeniusPrinter.searchArtistCallback);

}


module.exports = rapgeniusPlugin;