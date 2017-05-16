## express-session 
***
express-session 在本项目的做法是，将数据库查找与插入的成功与否，写一个标志位写入session中，在```路由规划前```设定动态视图助手  
``` javascript
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
```
其中next()是把控制权交给下一个路由规则   
