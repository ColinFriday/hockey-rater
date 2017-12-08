var http = require('http');
var mySportsFeeds = require("mysportsfeeds-node");

var url = "https://api.mysportsfeeds.com/v1.1/pull/nhl/2017-2018-regular/cumulative_player_stats.json?playerstats=G,A,Pts";
var username = "crf8764";
var password = "CodyIsCool";

var msf = new mySportsFeeds("1.0", true);

msf.authenticate(username, password);

var port = process.env.PORT || process.env.NODE_PORT || 3005;

function onRequest(request, response) {
    
}

http.createServer(onRequest).listen(port);

var data = msf.getData( 'nhl', '2017-2018-regular', 'cumulative_player_stats', 'json', {playerstats: 'Pts'});

console.dir(data);



