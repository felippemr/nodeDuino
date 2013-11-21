var j5 = require("johnny-five");

var board = new j5.Board();

var LEDPIN12 = 12;
var LEDPIN11 = 11;
var LEDPIN10 = 10;

board.on("ready", function(){
    var led1 = new j5.Led(LEDPIN12);
    var led2 = new j5.Led(LEDPIN11);
    var led3 = new j5.Led(LEDPIN10);

    led1.strobe(100);
    led2.strobe(100);
    led3.strobe(100);
});
