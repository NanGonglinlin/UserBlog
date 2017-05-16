 ## express tree
 ***
 ```
 .  
  |-- app.js  
  |-- bin  
  |   `-- www  
  |-- package.json  
  |-- public  
  |   |-- images  
  |   |-- javascripts  
  |   `-- stylesheets  
  |       `-- style.css  
  |-- routes  
  |   |-- index.js  
  |   `-- user.js  
  `-- views  
      |-- error.ejs  
      `-- index.ejs  
```
如果更改了app.js为入口文件，为其添加http.createServer()方法，则只只需要node app.js 就可以访问页面  
