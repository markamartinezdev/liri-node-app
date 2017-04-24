var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var require = require('request');
var appToCall = process.argv[2];
var userInput = process.argv[3];
var client = new Twitter({
    consumer_key: 'oLYvov3LLzxqDIpCsjkMGJ6is',
    consumer_secret: 'fr547lDeQh1FK2v33dVTNe1n9ioDojZsuFTl9t16BNcrLykEbw',
    access_token_key: '743254300323897345-b68Q4KEgGMniJRlqEMMEhSfVFuPFxbU',
    access_token_secret: 'eEvzAtmJhGw7rCpmuetGtA8KQiqtE3XymScrSJfrte4r1',
});

if (appToCall === 'my-tweets') {
    client.get('search/tweets', { q: 'angrymushr00m', count: '20' }, function(error, tweets, response) {
        for (var i = 0; i < tweets.statuses.length; i++) {
            console.log(tweets.statuses[i].text + '  ' + tweets.statuses[i].created_at);
        }
    });
}

if (appToCall === 'spotify-this-song') {
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log('artist: ' + data.tracks.items[0].artists[0].name);
        console.log('album: ' + data.tracks.items[0].album.name);
        console.log('title: ' + userInput);
        console.log('preview_url: ' + data.tracks.items[0].preview_url);
    });
    console.log('spotify');
}

if (appToCall === 'movie-this') {

    console.log('movie');
}

if (appToCall === 'do-what-it-says') {

    console.log('do it');
}
