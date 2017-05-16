## 片段视图partial
***
partial(@param1,@param2) @param1 是片段视图的名称 @param2 是一个对象或者数组 它的功能就可以把片段视图的名称.ejs渲染进你使用partial的ejs文件中  
``` javascript
  //user.ejs
  <% if(user){%>
  <%-partial("msg")%>
  <%}%>
  <%-partial("post")%>
```

``` javascript
  //index.ejs
  <%if(!user){%>
  <h1>Blog</h1>
   <% }else {%>
   <%-partial("msg")%>
  <%}%>
  <%-partial("post")%>
```

``` javascript
   //msg.ejs
<form method="post" action="/post" class="well form-inline" style="text-algin:center">
    <input type="text" class="txt" name="post" style=""></input>
    <button type="submit" class="btn btn-success">发言</button>
</form>

```

``` javascript
   //post.ejs
<% for(var i=0;i<posts.length;i++){ %>
    <div style="font-size:30px;border-bottom:solid 1px black;"><a style="color:#000" href="/u/<%=posts[i].email%>"><%=posts[i].email%></a></div>
    <p>时间:<i><%=posts[i].time%></i></p>
    <p>内容:<%=posts[i].post%></p>
<% } %>


```
