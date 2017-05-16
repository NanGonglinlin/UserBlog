
## 监听端口
  ***
  ```javascript
  //http.js
  var http = require("http");
  function start(){
    function onRequest(req, res){
      console.log("Request received.");
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.write("Hello World"); // 访问http://host:port 页面会显示hello world
      res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
  }
  exports.start = start;
  ```
## post请求
  ***
```javascript
  function start(){
      function onRequest(req,res){
        req.addListener("data",function(postdata){
            //data
        })
        req.addListener("end",function(){
            //router
        })
      }
  }
```
  实现post请求需要监听两次事件："data"、"end"。先执行data事件，data事件接收数据块，接收完毕且成功，再触发一次end事件，将post的数据返还给路由
