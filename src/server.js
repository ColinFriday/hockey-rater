// Name: Server.js
// Description: Runs All Server Side Downloads And Uploads On Request
// Author: Colin Friday
// Date: 12/9/2017
// Version: 0.3

"use strict";

var http = require('http');
var playerManager = require('./players.js');

var username = "crf8764";
var password = "CodyIsCool";

var responseHeaders = {  
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "Content-Type, accept",
    "access-control-max-age": 10,
    "Content-Type": "application/json"
};

var port = process.env.PORT || process.env.NODE_PORT || 3000;

function onRequest(request, response) {
    playerManager.retrievePlayers(username,password);

    playerManager.readPlayers();
    
    playerManager.preparePlayers();
    
    response.writeHead(200, responseHeaders);
    
    var players = JSON.stringify(playerManager.exportObject());
    
    console.dir(players);
    //response.write(JSON.stringify("Sent!"));
     
    response.end(players);
}

console.log(port);

http.createServer(onRequest).listen(port);

playerManager.retrievePlayers(username,password);

    




