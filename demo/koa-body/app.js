//使用 koa framwork
var koa = require('koa');
//
var Router=require('koa-router');
//bodyparser使用在POST
var bodyparser = require('koa-bodyparser');

var app = koa();
var router = new Router();

app.use(bodyparser());
/*
app.keys = ['ddddddddddaaaaaaaa'];
app.use(session())

app.use(function * (){
    var count = this.session.count || 0;
    count ++;
    this.session.count = count;
    this.body = this.session.count;
});
*/

router.get('/', function * (){
    this.body = '<form action="/get" method="get">'+
                '<input type="text" name="id"/>'+
                '<input type="submit" value="送出"/>'+
                '</form>';
});

router.get('/get',function *(){
    console.log(this.request.query.id);
});

router.post('/', function * (){
    console.log(this.request.body.id);
});

//利用 middleware 來使用 get , post 等等方法
app.use(router.middleware());



app.listen(3000,function(){
    console.log("listening port 3000");
});


