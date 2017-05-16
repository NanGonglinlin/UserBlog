## Express开发框架
  ***
  官方给出的介绍是 Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用他有着丰富为Connect 中间件  
  中文官网：http://www.expressjs.com.cn/  
  github ：https://github.com/expressjs/express  
## express 操作简单，开发速度快
  之前也介绍了node 的端口监听，代码量有10行左右，但是在express 只需要简单的set一个中间件，就可以完成操作，是不是觉得很方便
  
  ``` javascript
  app.set("port",process.env.PORT  || 4000);
  ```
