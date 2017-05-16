## 项目的文件路径

```
.
|-- app.js     # 入口文件
|-- bin
|   `-- www    # 自带入口文件
|-- expand_modules
|   `-- ejs
|       `-- index.js     # 引入index.js来支持ejs模板引擎
|-- models
|   |-- User.js          # 数据库查找与插入
|   `-- post.js          # 用户发送的数据的查找与插入
|-- node_modules         #  npm包管理
|   |-- batch  
|   |-- bluebird
|   |   `-- package.json
|   |-- body-parser
|   |-- bson
|   |-- buffer-crc32
|   |-- buffer-shims
|   |-- bytes
|   |-- commander
|   |-- connect
|   |-- connect-mongo
|   |-- cookie
|   |-- cookie-parser
|   |-- cookie-signature
|   |-- core-util-is
|   |-- crc
|   |-- debug
|   |-- depd
|   |-- ejs
|   |-- es6-promise
|   |-- express
|   |-- express-partials
|   |-- express-session
|   |-- fresh
|   |-- inherits
|   |-- isarray
|   |-- keypress
|   |-- merge-descriptors
|   |-- methods
|   |-- mime
|   |-- mkdirp
|   |-- mongodb
|   |-- mongodb-core
|   |-- morgan
|   |-- ms
|   |-- multiparty
|   |-- negotiator
|   |-- on-headers
|   |-- parseurl
|   |-- pause
|   |-- process-nextick-args
|   |-- qs
|   |-- random-bytes
|   |-- range-parser
|   |-- raw-body
|   |-- readable-stream
|   |-- require_optional
|   |-- resolve-from
|   |-- semver
|   |-- send
|   |-- static-favicon
|   |-- stream-counter
|   |-- string_decoder
|   |-- type-is
|   |-- uid-safe
|   |-- uid2
|   |-- util-deprecate
|   `-- utils-merge
|-- package.json      # 参数管理
|-- public            # 源文件
|   |-- images
|   |   |-- glyphicons-halflings-regular.eot
|   |   `-- glyphicons-halflings-regular.ttf
|   |-- javascripts
|   |   |-- bootstrap.js
|   |   |-- bootstrap.min.js
|   |   |-- jquery-2.1.1.min.js
|   |   `-- responsive-nav.js
|   `-- stylesheets
|       |-- bootstrap-responsive.css
|       |-- bootstrap-theme.css
|       |-- bootstrap-theme.min.css
|       |-- bootstrap.css
|       |-- bootstrap.min.css
|       |-- extra.css
|       |-- loginstyle.css
|       |-- regstyle.css
|       |-- responsive-nav.css
|       `-- styles.css
|-- routes         # 路由文件
|   |-- index.js
|   `-- user.js
|-- setting.js     # 用户信息
`-- views          # 展示层信文件
    |-- 404.ejs    # 404
    |-- 404.png    
    |-- error.ejs   
    |-- index.ejs  # 主页
    |-- layout.ejs # 模板
    |-- login.ejs  # 登录
    |-- msg.ejs    # 发送微博栏
    |-- post.ejs   # 显示发送信息栏和发送过的微博
    |-- reg.ejs    # 注册
    `-- user.ejs   # 个人用户

```
