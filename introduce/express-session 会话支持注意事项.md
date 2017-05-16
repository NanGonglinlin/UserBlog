## express-session 
***
express-session 在本项目的做法是，将数据库查找与插入的成功与否，写一个标志位写入session中，在```路由规划前```设定动态视图助手  ，本次介绍的是express会话支持  
``` javascript
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

app.use(app.router);

```
应注意的是app.use(app.router)一定要写在session中间件设定之后
   
