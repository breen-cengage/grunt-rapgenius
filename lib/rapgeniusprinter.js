var rapgeniusClient = require('rapgenius-js');

module.exports = function (loggerFunc, done, singleVerse) {
    function searchArtistCallback(err, artist) {
        if (err) {
            loggerFunc('Could not find artist [' + artist + ']');
            done();
        } else {
            var songs = artist.songs,
                songIndex = Math.floor(Math.random() * songs.length),
                garbagePrefix = 'http://rapgenius.com',
                song = songs[songIndex],
                link = song.link.substr(song.link.indexOf(garbagePrefix) + garbagePrefix.length);

            loggerFunc(artist.name + ' - ' + song.name);
            loggerFunc();
            loggerFunc();

            rapgeniusClient.searchLyricsAndExplanations(link, 'rap', searchLyricsAndExplanationsCallback);
        }
    }
    

    function searchLyricsAndExplanationsCallback(err, lyricsAndExplanations) {
        if (err) {
            loggerFunc(err);
        } else {
            var lyrics = lyricsAndExplanations.lyrics,
                sections = lyrics.sections,
                verses,
                verse;

            if (singleVerse) {
                var section = sections[Math.floor(Math.random() * sections.length)];
                var verse;
                if (section.verses.length === 0) {
                    verse = {content:""};
                } else {
                    verse = section.verses[Math.floor(Math.random() * section.verses.length)];
                }
                if (!verse) {
                    verse = {content:""};
                }
                loggerFunc(verse.content);
            } else {
                for (var i = 0; i < sections.length; i++) {
                    verses = sections[i].verses;
                    for (var j = 0; j < verses.length; j++) {
                        verse = verses[j];
                        loggerFunc(verse.content);
                    }
                }
            }
        }
        done();
    }


    return {
        searchArtistCallback: searchArtistCallback,
        searchLyricsAndExplanationsCallback: searchLyricsAndExplanationsCallback
    }

}

