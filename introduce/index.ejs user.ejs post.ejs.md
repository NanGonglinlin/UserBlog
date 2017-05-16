## index.ejs
***
主页中，如果用户不存在就只显示个Blog和发布的数据，不显示发布框  
``` javascript
  <%if(!user){%>
<h1>Blog</h1>
 <% }else {%>
 <%-partial("msg")%>
<%}%>
<%-partial("post")%>

```
## user.ejs
***
个人发布微博展示页中，如果用户存在就显示发布框和发布的数据，用户不可能不存在，因为在主页中看到的用户都是注册成功的，且可以在数据库中找到的，如果给数据库插入一个账号，点击会触发404，因为插入的用户是没有发布数据的，这点我的测试阶段试过。  
``` javascript
  <% if(user){%>
<%-partial("msg")%>
<%}%>
<%-partial("post")%>

```
显示发布数据：posts是后端找用户账号，找到后返还给前端的API，前端只是遍历出来显示即可  
## post.ejs
***
``` javascript
  <% for(var i=0;i<posts.length;i++){ %>
    <div style="font-size:30px;border-bottom:solid 1px black;"><a style="color:#000" href="/u/<%=posts[i].email%>"><%=posts[i].email%></a></div>
    <p>时间:<i><%=posts[i].time%></i></p>
    <p>内容:<%=posts[i].post%></p>
<% } %>

```
