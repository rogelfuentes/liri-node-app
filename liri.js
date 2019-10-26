require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios")
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var liriname = process.argv;
var command = liriname[2];
var value = liriname[3];

function concert() {
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
        function (response) {

            console.log("Name of the venue: " + response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.country);
            console.log("Date of the Event: " + response.data[0].datetime);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function spotifySong() {
    spotify.search({ type: 'track', query: value }).then(
        function (response) {
            console.log("Name of the song: " + response.tracks.items[0].name);
            console.log("Artists: " + response.tracks.items[0].artists[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Preview of the song: " + response.tracks.items[0].preview_url);
        })
        .catch(function (err) {
            console.log(err);
        });

};
function swithCommand() {
    switch (command) {
        case "concert-this":
            concert()
            break;
        case "spotify-this-song":
            spotifySong()
            break;
        case "movie-this":
            axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + value).then(
                function (response) {
                    console.log("Title of the movie: " + response.data.Title)
                    console.log("Year the movie came out: " + response.data.Year)
                    console.log("IMDB Rating of the movie: " + response.data.imdbRating)
                    console.log("Rotten Tomatoes Rating of the movie: " + response.data.imdbVotes)
                    console.log("Country where the movie was produced: " + response.data.Country)
                    console.log("Language of the movie: " + response.data.Language)
                    console.log("Plot of the movie: " + response.data.Plot)
                    console.log("Actors in the Actors: " + response.data.Actors)
                })
                .catch(function (err) {
                    console.log(err);
                });
            break;
        case "do-what-it-says":
            console.log("do-what-it-says Works!!");
            var fs = require("fs");

            fs.readFile("random.txt", "utf8", function (error, data) {

                // If the code experiences any errors it will log the error to the console.
                if (error) {
                    return console.log(error);
                }

                // We will then print the contents of data
                console.log(data);

                // Then split it by commas (to make it more readable)
                var dataArr = data.split(",");

                // We will then re-display the content as an array for later use.
                console.log(dataArr);
                value = dataArr[1];
                command = dataArr[0];
                swithCommand();
            });



            break;
        default:
            console.log("Wrong Command");
    }
}
swithCommand();