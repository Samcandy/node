var serialport = require("serialport");

var koa = require('koa');
var Router=require('koa-router');
var bodyparser = require('koa-bodyparser');
var serve = require('koa-static');


var app = koa();
var router = new Router();
var input;
var input2;
app.use(bodyparser());
app.use(serve('./public'));


var port = new serialport("/dev/ttyACM0",{
    parser: serialport.parsers.readline('\n')
});

port.on('open', function(){
    router.get('/get',function *(){
            //setTimeout(function(){        
                input = this.request.query.id
                input2 = this.request.query.id2
                if(input =='on'){input = "1"}
                if(input2 =='off'){input = "2"}
                console.log(input);
                port.write(input,function(err){
                    if(err){
                        return console.log('Error on write: ', err.message);
                     }
                console.log('message written');
                });
            //},6000);
     this.body = '<form action="/get" method="get">'+
                 '<input type="submit" name="id" value="on" >'+
                 '<input type="submit" name="id2" value="off" >'+
                 '</form>';
    });
});

port.on('error', function(err){
    console.log('Error: ',err.message);
});

/*
router.get('/get',function *(){
    console.log(this.request.query.id);
   console.log(this.request.query.id2); 
});
  */  


app.use(router.middleware());

app.listen(3000,function(){
    console.log("listening port 3000");
});

