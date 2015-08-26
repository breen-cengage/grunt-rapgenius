grunt-rapgenius
===============

Pass a list of artists from your Gruntfile like this:

```
grunt.initConfig({
    rapgenius: {
        options: {
            artists: ['GZA', 'RZA']
            // or like this
            // artists: require('./artists.json')
        }
    }
});
```

Bonus gulp task
---------------

In your gulpfile:

```
var rapgeniusPrinter = require('grunt-rapgenius/lib/rapgenius-gulp');


gulp.task('rap', function (done) {
    rapgeniusPrinter({}, done);
});
```


Options
-------
The following options are available:

* Artists: `['a', 'list', 'of', 'artists'];`
* singleVerse: `true` or `false`, boolean. Print out the entire song or a single verse. Defaults to `true`

