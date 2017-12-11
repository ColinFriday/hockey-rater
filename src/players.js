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
var object = {'players' : null};
var exportPlayers = [];

var retrievePlayers = function(username, password) {

    msf.authenticate(username, password);
      
    var data = msf.getData('nhl', '2017-2018-regular', 'cumulative_player_stats', 'json', {playerstats: 'Pts'});
};

var readPlayers = function(){
    
    var playerObj = JSON.parse(fs.readFileSync('results/cumulative_player_stats-nhl-2017-2018-regular.json', 'utf8'));
    
    playerArray = playerObj.cumulativeplayerstats.playerstatsentry;

    //console.dir(playerArray);
};

var exportObject = function(){
  
    object.players = exportPlayers;
    
    return object;
};

var preparePlayers = function(){  
    for(var i = 0; i < playerArray.length; i++){
        
        if(playerArray[i].player.Position != "G") {
            exportPlayers[i] = {
                firstName: playerArray[i].player.FirstName,
                lastName: playerArray[i].player.LastName,
                position: playerArray[i].player.Position,
                team: playerArray[i].team.City + " " + playerArray[i].team.Name,
                ppg: playerArray[i].stats.stats.Points['#text'] / playerArray[i].stats.GamesPlayed['#text'],
                role: "?"
            }; 
            
            if(Number.isNaN(exportPlayers[i].ppg)) {
                exportPlayers[i].ppg = 0;
            }
            
            exportPlayers[i].ppg = (exportPlayers[i].ppg).toFixed(2);
            
            
            if(exportPlayers[i].position == "C" || exportPlayers[i].position == "RW" || exportPlayers[i].position == "LW") {
                if(exportPlayers[i].ppg >= .7) {
                    exportPlayers[i].role = "First Line Forward";
                }
                else if(exportPlayers[i].ppg >= .5) {
                    exportPlayers[i].role = "Second Line Forward";
                }
                else if(exportPlayers[i].ppg >= .36) {
                    exportPlayers[i].role = "Third Line Forward";
                }
                else if(exportPlayers[i].ppg >= .21) {
                    exportPlayers[i].role = "Fourth Line Forward";
                }
                else {
                    exportPlayers[i].role = "AHL Forward"
                }
            }
            else {
               if(exportPlayers[i].ppg >= .41) {
                    exportPlayers[i].role = "Top 2 Defenseman";
                }
                else if(exportPlayers[i].ppg >= .25) {
                    exportPlayers[i].role = "Top 4 Defenseman";
                }
                else if(exportPlayers[i].ppg >= .15) {
                    exportPlayers[i].role = "Top 6 Defenseman";
                }
                else {
                    exportPlayers[i].role = "AHL Defenseman"
                } 
            }
        }
        
    }
    
    //console.dir(exportPlayers);
}

module.exports.retrievePlayers = retrievePlayers;
module.exports.readPlayers = readPlayers;
module.exports.preparePlayers = preparePlayers;
module.exports.exportObject = exportObject;