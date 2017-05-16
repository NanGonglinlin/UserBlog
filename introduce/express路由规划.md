### 路由规划
***

``` javascript
  app.get('/', routes.index);  //主页路由规划
  app.get("/u/:user",routes.user);  //个人用户页路由规划
  app.get("/reg",routes.reg);      //注册路由规划
  app.get("/login",routes.login);   //登录路由规划
  app.get("/logout",routes.logout);  //退出路由规划
  app.get('/users', users.list);     //user信息路由规划

```
