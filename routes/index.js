/* GET home page. */
//加密工具
var crypto = require("crypto");
//数据库操作
var User=require("../models/User");
var Post=require("../models/post");
//index，主页的设定路由
exports.index = function(req, res){
 // res.render('index', { title:'Express',name:"indexname" });
    Post.find(null,function (err,posts){
		if(err){
			posts=[];
		}
		console.log(posts);
		res.render("index",{
			title:"首页",
			posts:posts
		})
	})
}
//admin 管理员操作路由
exports.user = function (req,res){
   //res.render("user",{ title:"user",name:"username"});
  //res.send("this is 用户主页");
  //路由规则URL的参数/u/:user 匹配得到的user(邮箱),在数据库里面找邮箱，看是否存在
   User.find(req.params.user,function(err,user){
   		console.log(user);
   		if(!user){
			req.session.error="用户不存在";
			return res.redirect("/");
		}
		//在数据库中找邮箱的post数据
		Post.find(user.email,function (err , posts){
			if(err){
				req.session.error=err;
				return res.redirect("/");
			}
			console.log(user);
			res.render("user",{
				title:user.email,
				posts:posts
			})
		})
   
   })
}
//发布内容路由
exports.post = function(req, res){
//res.render("post",{ title:"post",name:"postname"});
	//res.send("this is 发表信息页 ");
    var currentUser=req.session.user;
	var post=new Post(currentUser.email,req.body.post);
	console.log("------");
	console.log(post);
	post.save(function(err){
		if(err){
			console.log(1);
			console.log(req.session.user);
			req.session.error="save有问题";
			return res.redirect("/");
		}
		req.session.success="发表成功";
		res.redirect("/u/"+currentUser.email);
	})
}
//注册
exports.reg  = function (req,res){
   res.render("reg",{ title:"reg",name:"regname"});
 // res.send("this is reg");
}
//注册账号密码的查重与储存
exports.doReg = function(req, res){
  // res.render("doReg",{ title:"doReg",name:"doRegname"});
  var md5=crypto.createHash("md5");
  var psw=md5.update(req.body.psw).digest("base64");
  var email=req.body.email;
  var sex=req.body.sex;
  //添加一个json用户,传给User构造函数
  var userdata=new User({
  		email:email,
		password:psw,
		sex:sex
  })
  User.find(userdata.email,function(err,user){
  		if(user){
			req.session.error="用户已存在";
			console.log(1);
			return res.redirect("/reg");
		}
		userdata.save(function (err){
			if(err){
				console.log(err);
				return res.redirect("/reg");
			}
			console.log(2);
			console.log(userdata);
			req.session.user=userdata;
			console.log(req.session);
			req.session.success="注册成功";
			res.redirect("/");
		})
  })
  console.log(req.body);
}
//登录
exports.login = function(req, res){
   res.render("login",{ title:"login",name:"loginname"});
  //res.send("this is 用户登录页");
}
//登录账号与密码的检查
exports.doLogin = function(req, res){ 
   //res.render("doLogin",{ title:"doLogin",name:"doLoginname"});
  //res.send("this is 确认登录页 ");
  	var password=req.body.psw;
  	var md5=crypto.createHash("md5");
	var psw=md5.update(password).digest("base64");
	
	User.find(req.body.email,function(err,user){
		if(!user){
			req.session.error="用户不存在";
			return res.redirect("/login");
		}
		if(user.password!=psw){
			req.session.error="密码错位";
			return res.redirect("/login");
		}
		req.session.user=user;
		req.session.success="登录成功";
		res.redirect("/");
	})
}
//退出登录
exports.logout = function(req, res){
   //res.render("logout",{ title:"logout",name:"username"});
   //res.send("this is 用户退出页");
   req.session.user=null;
   req.session.success="退出成功";
   res.redirect("/");
}

