## Express 安装(root)  
***

``` Bash
$ npm install -g express-generator@4

$ express /tmp/foo && cd /tmp/foo

$ npm install

$ npm start

$ epress --help
```
##  建一个express文件，其中视图层使用ejs引擎进行渲染
***
  ``` Bash
    $　express  -e nodeitem
    $  cd nodeitem
    $  npm install                  # 检查当前目录下的package.json，并自动安装所指定的依赖  
  ```

  ``` Bash
    $  cd routes &&　ls
    $  vim index.js
  ```
  
  路由文件  
  
  ``` javascript
    /* GET home page. */
      exports.index = function(req, res){
        res.render('index', { title: 'Express' });  //index.ejs 传title
      };
  ```
  
  ``` Bash
    $  cd views &&　ls
    $  vim index.ejs
  ```
  
  查看视图层indexejs，ejs标签<%=title%> 可渲染路由文件index.js的render的title属性  
  
``` 
    <!DOCTYPE html>
    <html>
      <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
      </head>
      <body>
        <h1><%= title %></h1>
        <p>Welcome to <%= title %></p>
      </body>
    </html>
    
``` 
  
设置app.js为入口文件  

``` Bash
    $  vim app.js
```
  
``` javascript
    app.set("port",process.env.PORT || 3000);//端口
    
    http.createServer(app).listen(app.get("port"),function (){
      console.log("this is"+app.get("port"));
    })
```
