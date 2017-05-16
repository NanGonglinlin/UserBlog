## 设置模板文件为layout
***
在app.js文件中  
``` javascript

app.engine("ejs",engine);
app.locals._layoutFile="layout";

```
在routes/index.js  

