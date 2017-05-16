var express = require('express');
var crypto = require("crypto");
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require("./expand_modules/ejs/index.js");
var partials = require("express-partials");
var routes = require('./routes');
var users = require('./routes/user');
var setting = require("./setting.js");
var connect=require("connect");
var session = require('express-session');
//var MongoStore = require('connect-mongo')(session);
var MongoStore = require('connect-mongo')(connect);
var app = express();
/*--------视图层中间件的设定----------------------*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("port",process.env.PORT  || 4000);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
/*--------session中间件的设定，可访问session数据---*/
//会话中间件，存放在mongodb中
app.use(session({
   	secret:"keyboard cat",
    name:"blog",
	key:"sid",
	resave:false,
	saveUninitialized: true,
	cookie: { secure: false },
	/*store:new MongoStore({
		db:setting.db
    })*/
}))
/*----------------获取动态视图助手------------------*/
app.use(function (req,res,next){
	var err=req.session.error;
	var suc=req.session.success;
	delete req.session.error;
	delete req.session.success;
	res.locals.message="";	
	if(err){res.locals.message="<div class='alert alert-error'>"+err+"</div>"}
	if(suc){res.locals.message="<div class='alert alert-success'>"+suc+"<div>"}
	next();
})
//user
app.use(function (req,res,next){
	res.locals.user=req.session.user
	next();
})

/*----------------路由控制与路由规则的中间件设定-----*/
// this is routes regulation
app.get('/', routes.index);
app.engine("ejs",engine);
app.locals._layoutFile="layout";
app.get("/u/:user",routes.user);
app.post("/post",routes.post)
app.get("/reg",routes.reg);//注册
app.get("/login",routes.login);//登录
app.get("/logout",routes.logout);
app.get('/users', users.list);
//注册检查
app.post("/reg",routes.doReg);
//登录检查
app.post("/login",routes.doLogin);
//路由文件
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

/*------------------入口文件设置---------------------*/
http.createServer(app).listen(app.get("port"),function (){
console.log("this is "+app.get("port"));
})

/*-------------------错误控制------------------------*/
// catch 404 and forwarding to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/
app.use(function(req,res){
	if(!res.headersSent){
		res.status(404).render("404");
	}
})
/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//暴露接口
module.exports = app;
