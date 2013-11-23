var j5 = require("johnny-five");

var board = new j5.Board();


board.on("ready", function(){
    var led1 = new j5.Led(13);
    led1.strobe(100);
});
