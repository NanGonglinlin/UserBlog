## ejs引擎与jade引擎
***
Jade和ejs，哪一个更胜一筹？: https://cnodejs.org/topic/516f95526d38277306ae154d  

关于nodejs的模板引擎，如何选择 EJS 和 Jade？: https://www.zhihu.com/question/20355486?sort=created  

### ejs

router render

``` javascript
  {	title:	'Cleaning Supplies'supplies:	['mop', 'broom', 'duster']	}
```

```
  <h1><%= title %></h1>
  <ul>
  <% for(var i=0; i<supplies.length; i++) {%>
    <li><%= link_to(supplies[i], 'supplies/'+supplies[i]) %></li>
  <% } %>
</ul>
```

### jade

router render  

 ``` javascript
{"name": "Bob"}
 ```
 
```
  doctype html
  html
    head
      title my jade template
    body
      h1 Hello #{name}
 ```
