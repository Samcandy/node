var SerialPort = require("serialport");

var port = new SerialPort("/dev/ttyACM0",{
    parser: SerialPort.parsers.readline('\n')
});

port.on('open', function(){
    setTimeout(function(){
    port.write('apple\r', function(err){
        if(err){
            return console.log('Error on write: ', err.message);
        }
        concole.log('message written');
    });
  },6000);
});

port.on('error', function(err){
    console.log('Error: ',err.message);
});

