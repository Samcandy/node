var koa = require('koa');
var session  = require('koa-session');

var app = koa();
//var router = new Router();

app.keys = ['ddddddddddaaaaaaaa'];
app.use(session());

app.use(function * (){
    var count = this.session.count || 0;
    count ++;
    this.session.count = count;
    this.body = this.session.count;
});

/*router.get('/params/:name/:message', function * (){
    this.body = 'hello get'+this.params.name+'say'+this.params.message;
});


router.post('/', function * (){
    this.body = 'hello post';
});

app.use(router.middleware());
*/
app.listen(3000,function(){
    console.log("listening port 3000");
});

