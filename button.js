var five = require("johnny-five"),
    board,led,button;
var LEDPIN12 = 12;
var LEDPIN11 = 11;
var LEDPIN10 = 10;

    board = new five.Board();

    board.on("ready", function() {

      //Create a new `button` hardware instance.
      //This example allows the button module to
      //create a completely default instance
      button = new five.Button(9);
      var led1 = new five.Led(LEDPIN12);
      var led2 = new five.Led(LEDPIN11);
      var led3 = new five.Led(LEDPIN10);

      //Inject the `button` hardware into
      //the Repl instance's context;
      //allows direct command line access
      board.repl.inject({
        button: button
      });

      //Button Event API
      //"down" the button is pressed
      button.on("down", function() {
        led1.on();
        led2.on();
        led3.on();
      });

      //"hold" the button is pressed for specified time.
      //defaults to 500ms (1/2 second)
      //set
      button.on("hold", function() {
        //led1.strobe();
        //led2.strobe();
        //led3.strobe();
      });

      //"up" the button is released
      button.on("up", function() {
        led1.off();
        led2.off();
        led3.off();
      });
    });
