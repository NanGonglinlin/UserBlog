## 安装教程 | [详细见我的博客园](http://www.cnblogs.com/dirkhe/p/6847898.html)
``` Bash
$ wget https://fastdl.mongodb.org/linux/mongodb-linux-i686-2.6.7.tgz
```

``` Bash
$ tar -zxvf mongodb-linux-i686-2.6.7.tgz  
```

``` Bash
$ mv mongodb-linux-i686-2.6.7 mongodb 
```

``` Bash
$ mkdir -p  ./log  //生成日志存放位置
```

``` Bash
$ mkdir -p  ./db  //数据文件存放位置
```

``` Bash
$ cd log  
```

``` Bash
$ touch mongodb.log  //生成日志存放文件
```

``` Bash
$ cd mongodb/  
```

``` Bash
$ cd bin 
```

``` Bash
$ vi mongodb.conf      //配置参数
```

``` Bash
dbpath = ./db    #数据文件存放目录
logpath = ./log/mongodb.log  #日志文件存放目录
port = 27017 #端口
fork =  true   #后台可运行
nohttpinterface =  true  #默认关闭27018端口访问
```

