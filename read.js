var SerialPort = require("serialport");

var port = new SerialPort("/dev/ttyACM0",{
    parser: SerialPort.parsers.readline('\n')
});

port.on('open', function(){
    port.on('data', function(data){
        console.log(data);
        console.log(typeof(data));
    });
});

port.on('error', function(err){
    console.log('Error: ',err.message);
});
