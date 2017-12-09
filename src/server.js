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

var port = process.env.PORT || process.env.NODE_PORT || 3005;

function onRequest(request, response) {
    
}

http.createServer(onRequest).listen(port);

playerManager.retrievePlayers(username,password);
    
playerManager.preparePlayers();

    




