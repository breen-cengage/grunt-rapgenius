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
