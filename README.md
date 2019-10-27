# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


CloudServer:liri-node-app meruxtream$ node liri.js spotify-this-song Jueves
Name of the song: Jueves
Artists: La Oreja de Van Gogh
Album: A las Cinco en el Astoria
Preview of the song: https://p.scdn.co/mp3-preview/63615b6d7a49177d4a1dbbb690b007074b2ef3d2?cid=2190b81733964c78b109178d558b8874
CloudServer:liri-node-app meruxtream$ 

CloudServer:liri-node-app meruxtream$ node liri.js spotify-this-song Jueves
Name of the song: Jueves
Artists: La Oreja de Van Gogh
Album: A las Cinco en el Astoria
Preview of the song: https://p.scdn.co/mp3-preview/63615b6d7a49177d4a1dbbb690b007074b2ef3d2?cid=2190b81733964c78b109178d558b8874

CloudServer:liri-node-app meruxtream$ node liri.js spotify-this-song madona
Name of the song: La Madona
Artists: Hazel
Album: Mi Rival Es Mi Amigo
Preview of the song: https://p.scdn.co/mp3-preview/05c08f72f5880fbfab46c7fda35e16fac72ede99?cid=2190b81733964c78b109178d558b8874

CloudServer:liri-node-app meruxtream$ node liri.js concert-this madona
Name of the venue: The Chicago Theatre
Venue location: United States
Date of the Event: 2019-10-21T20:30:00