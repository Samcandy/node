var koa =require('koa');
var Router =require('koa-router');
var views =require('koa-views');

var app=koa();
var router=new Router();

app.use(views(__dirname+'/views',{
    map : {
        html :"swig"
    }
}));

router.get('/',function *(){
    yield this.render('index',{
        title:"bob",
        item:[1,2,3,4,5]
    });
});

app.use(router.middleware());
//app.listen(3000);
app.listen(3000,function(){
    console.log("listening port 3000");
});
