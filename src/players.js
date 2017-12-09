// Name: Player.js
// Description: Creates And Manages Player Arrays And JSON Objects
// Author: Colin Friday
// Date: 12/9/2017
// Version: 0.1

"use strict";

var mySportsFeeds = require('mysportsfeeds-node');
var fs = require('fs');

var msf = new mySportsFeeds("1.0", true);

var playerArray;
var exportObject = {};
var exportPlayers[];

var retrievePlayers = function(username, password) {

    msf.authenticate(username, password);
      
    var data = msf.getData('nhl', '2017-2018-regular', 'cumulative_player_stats', 'json', {playerstats: 'Pts'});
};

var readPlayers = function(){
    
    var playerObj = JSON.parse(fs.readFileSync('results/cumulative_player_stats-nhl-2017-2018-regular.json', 'utf8'));
    
    playerArray = playerObj.cumulativeplayerstats.playerstatsentry;

    console.dir(playerArray);
};

var exportPlayers = function(){
    
};

var preparePlayers = function(i){
    console.dir(playerArray[i]);
}

module.exports.retrievePlayers = retrievePlayers;
module.exports.readPlayers = readPlayers;
module.exports.preparePlayers = preparePlayers;
module.exports.exportPlayers = exportPlayers;