
## express 路由文件
***
路由文件 是routes/index.js  

``` javascript
  /* GET home page. */
  exports.index = function(req, res){
    res.render('index', { title: 'Express' });
  };
```
res.render(@param1,@param2) @param1 是视图层文件名 @param2 是json数据，视图层可访问并渲染  

res.send("string")  里面传的字符串可直接显示在页面上  
