var rapgeniusClient = require('rapgenius-js');

module.exports = function (grunt) {
    grunt.registerTask('rapgenius', 'Rap Genius', function () {
        var rg = this,
            artists = this.options().artists || require('../artists.json'),
            singleVerse = this.options().singleVerse || true;
            done = this.async(),
            artistIndex = Math.floor(Math.random() * artists.length);
        rg.artist = artists[artistIndex];

        var rapgeniusPrinter = require('./../lib/rapgeniusprinter.js')(grunt.log.writeln, done, singleVerse);
        
        rapgeniusPrinter.searchArtistCallback.bind(rg);
        rapgeniusClient.searchArtist(rg.artist, 'rap', rapgeniusPrinter.searchArtistCallback);
    });
};