var koa = require('koa');
var Router  =require('koa-router');

var app = koa();
var router = new Router();

router.get('/params/:name/:message', function * (){
    this.body = 'hello get'+this.params.name+'say'+this.params.message;
});


router.post('/', function * (){
    this.body = 'hello post';
});

app.use(router.middleware());

app.listen(3000,function(){
    console.log("listening port 3000");
});

