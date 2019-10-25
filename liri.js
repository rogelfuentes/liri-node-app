require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios")
var Spotify = require('node-spotify-api');

var liriname = process.argv;
var command = liriname[2];
var value = liriname[3];

console.log(liriname);
console.log(command);
console.log(value);

switch (command) {
    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
            function (response) {
                console.log(response.data);
            }
        )
        break;
    case "spotify-this-song":
        spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data);
        });
        console.log("movie works!");
        break;
    case "movie-this":
        console.log("movie works!");
        break;
    default:
        console.log("Wrong Command");
}