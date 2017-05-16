## UserBlog

基于 Express + mongoDB 的个人微博发布平台

## 开发环境
  - node.js : v6.10.1
  - mongoDB : v2.6.7
  - express : v3.0.0
  - linux   : v3.10.0-123.el7.x86_64 (builder@kbuilder.dev.centos.org) (gcc version 4.8.2 20140120 (Red Hat 4.8.2-16) (GCC) )    
  
## 目录

* 开发环境搭建 
    * node.js 简单介绍与环境配置
      * [node与jQuery、js的区别](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/Centos%20%E5%AE%89%E8%A3%85%20mongoDB.md)
      * [node 如何完成一次post请求](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/node%20%E5%A6%82%E4%BD%95%E5%AE%8C%E6%88%90%E4%B8%80%E6%AC%A1post%E8%AF%B7%E6%B1%82.md)
      * [node 单线程、非阻塞、事件队列](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/node%20%E5%8D%95%E7%BA%BF%E7%A8%8B%E3%80%81%E9%9D%9E%E9%98%BB%E5%A1%9E%E3%80%81%E4%BA%8B%E4%BB%B6%E9%98%9F%E5%88%97.md)
      * [node环境的配置、npm、nrm](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/node%E7%8E%AF%E5%A2%83%E7%9A%84%E9%85%8D%E7%BD%AE%E3%80%81npm%E3%80%81nrm.md)
    * mongoDB 简单介绍与环境配置
      * [mongoDB：非关系型数据库、nosql](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/mongoDB%EF%BC%9A%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E3%80%81nosql.md)
      * [Centos 安装 mongoDB](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/Centos%20%E5%AE%89%E8%A3%85%20mongoDB.md)
    * Express.js 简单介绍与环境配置
      * [为什么使用express](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8express.md)
      * [express环境配置](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.md)
      * [express tree](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express%20tree.md)
      * [模板引擎ejs和jade](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8Eejs%E5%92%8Cjade.md)
      * [express 路由文件](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express%20%E8%B7%AF%E7%94%B1.md)
    * linux 基本命令介绍
      * [基本命令](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4.md)
 * 项目的介绍
    * [已实现功能](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%B7%B2%E5%AE%9E%E7%8E%B0%E5%8A%9F%E8%83%BD.md)
    * [项目 tree](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E9%A1%B9%E7%9B%AE%20tree.md)
    * 前端页面设计
      * [express中间件的设定](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express%E4%B8%AD%E9%97%B4%E4%BB%B6%E7%9A%84%E8%AE%BE%E5%AE%9A.md)
      * [express路由控制](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express%E8%B7%AF%E7%94%B1%E6%8E%A7%E5%88%B6.md)
      * [ejs标签](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/ejs%E6%A0%87%E7%AD%BE.md)
      * [layout.ejs、index.ejs、reg.ejs、login.ejs、msg.ejs](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/layout.ejs%E3%80%81index.ejs%E3%80%81reg.ejs%E3%80%81login.ejs%E3%80%81msg.ejs.md)
    * 后端业务逻辑
      * [连接数据库](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E8%BF%9E%E6%8E%A5%E6%95%B0%E6%8D%AE%E5%BA%93.md)
      * [express-session 会话支持注意事项](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/express-session%20%E4%BC%9A%E8%AF%9D%E6%94%AF%E6%8C%81%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.md)
      * [数据库find与insert](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E6%95%B0%E6%8D%AE%E5%BA%93find%E4%B8%8Einsert.md)
      * [如何进行注册](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E6%B3%A8%E5%86%8C.md)
      * [动态视图助手的设定与注意事项](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%8A%A8%E6%80%81%E8%A7%86%E5%9B%BE%E5%8A%A9%E6%89%8B%E7%9A%84%E8%AE%BE%E5%AE%9A%E4%B8%8E%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.md)
      * [如何进行登录](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E7%99%BB%E5%BD%95.md)
      * [如何退出用户、退出前后前端页面的显示](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%A6%82%E4%BD%95%E9%80%80%E5%87%BA%E7%94%A8%E6%88%B7%E3%80%81%E9%80%80%E5%87%BA%E5%89%8D%E5%90%8E%E5%89%8D%E7%AB%AF%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%98%BE%E7%A4%BA.md)
      * [微博发布的业务逻辑](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%BE%AE%E5%8D%9A%E5%8F%91%E5%B8%83%E7%9A%84%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91.md)
      * [如何发布微博](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E5%A6%82%E4%BD%95%E5%8F%91%E5%B8%83%E5%BE%AE%E5%8D%9A.md)
      * [查询指定用户的微博](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E6%9F%A5%E8%AF%A2%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E5%BE%AE%E5%8D%9A.md)
      * [partial片段视图](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/partial%E7%89%87%E6%AE%B5%E8%A7%86%E5%9B%BE.md)
      * [index.ejs user.ejs post.ejs](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/index.ejs%20user.ejs%20post.ejs.md)
      * [md5加密与AES对称加密](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/md5%E5%8A%A0%E5%AF%86%E4%B8%8EAES%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86.md)
  * [遇到的问题](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98.md)
  * [项目的收获](https://github.com/dirkhe1051931999/UserBlog/blob/master/introduce/%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%94%B6%E8%8E%B7.md)
    
