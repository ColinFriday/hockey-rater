"use strict";

var players;

window.onload = function() {
    $.ajax({
		  dataType: "json",
		  url: 'http://127.0.0.1:3005/',
		  data: null,
		  success: jsonLoaded
    });
    
    function jsonLoaded(obj){
		players = obj.players;
        
        console.dir(players);
    }
}



