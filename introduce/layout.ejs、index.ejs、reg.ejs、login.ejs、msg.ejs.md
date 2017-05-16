## layout.ejs
***
  layout.ejs是视图模板引擎，其代码如下所示

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Demo</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link  rel="stylesheet" href="/stylesheets/regstyle.css">
    <link  rel="stylesheet" href="/stylesheets/extra.css">
    <link rel="stylesheet" href="/stylesheets/responsive-nav.css">
    <link rel="stylesheet" href="/stylesheets/styles.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/loginstyle.css">
    <script src="/javascripts/responsive-nav.js"></script>
  </head>
  <body>

    <div role="navigation" id="foo" class="nav-collapse">
      <ul>
        <li class="active"><a href="/">首页</a></li>
       <% if(!user){ %>
        <li><a href="/login">登录</a></li>
        <li><a href="/reg">注册</a></li>
       <% }else{ %> 
        <li><a href="/">用户: <%-user.email%></a></li>
        <li><a href="/logout">退出</a></li>
        <li><a href="/reg">再次注册</a><li>
    <% } %> 
      </ul>
    </div>   
      
    <div role="main" class="main">
     <%-message%>
      <a href="#nav" class="nav-toggle">Menu</a>
      <%-body%>
    </div>
    
    <script>
     // responsiveNav（parameter:id,{customToggle:class}）
     var navigation = responsiveNav("foo", {customToggle: ".nav-toggle"});
    </script>
  </body> 
```
引擎模板是展示层的核心，其中<%-body>可以把进行路由规划的ejs文件渲染进模板引擎中  
## reg.ejs
***
```
  <span class="register-title">用户注册</span>
      <form class="register" method="post">
        <div class="register-switch" >
          <input type="radio" name="sex" value="F" id="sex_f" class="register-switch-input" checked="">
          <label for="sex_f" class="register-switch-label">女</label>
          <input type="radio" name="sex" value="M" id="sex_m" class="register-switch-input">
          <label for="sex_m" class="register-switch-label">男</label>
        </div>
    <input type="email" class="register-input" name="email" placeholder="请输入邮箱地址">
    <input type="password" class="register-input" name="psw" placeholder="请输入密码">
    <input type="submit" value="注册" class="register-button">
      </form>
~             
```
reg.ejs是用户注册页面，也是用了bootstrap框架，响应式布局  
## index.ejs
***
```
  <%if(!user){%>
  <h1>Blog</h1>
   <% }else {%>
   <%-partial("msg")%>
  <%}%>
  <%-partial("post")%>

```
index.ejs文件是显示主页的文件，其中当用户不存在的时，只显示Blog，当用户存在时显示发布框和发布的信息，至于片段视图partial下一讲会讲到  
## login.ejs
***
```
    <div class="htmleaf-container">
        <div class="demo form-bg" style="padding: 20px 0;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-3 col-md-6">
                            <form class="form-horizontal" method="post">
                                <span class="heading">用户登录</span>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="inputEmail3" name="email"  placeholder="用户名或电子邮件">
                                    <i class="fa fa-user"></i>
                                </div>
                                <div class="form-group help">
                                    <input type="password" class="form-control" id="inputPassword3" name="psw" placeholder="密　码">
                                    <i class="fa fa-lock"></i>
                                    <a href="#" class="fa fa-question-circle"></a>
                                </div>
                                <div class="form-group">
                                    <div class="main-checkbox">
                                        <input type="checkbox" value="None" id="checkbox1" name="check"/>
                                        <label for="checkbox1"></label>
                                    </div>
                                    <span class="text">Remember me</span>
                                    <button type="submit" class="btn btn-default">登录</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>


```
登录页面的设定是响应式的，它使用了bootstrap框架  
## msg.ejs
***
```

  <form method="post" action="/post" class="well form-inline" style="text-algin:center">
      <input type="text" class="txt" name="post" style=""></input>
      <button type="submit" class="btn btn-success">发言</button>
  </form>

```
msg.ejs 文件是显示发布微博的微博框一栏
