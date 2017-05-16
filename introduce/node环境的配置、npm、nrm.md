## nodejs npm nrm （root）
  ***
  ``` Bash
  $ yum install nodejs
  ```
  npm Node包管理器（Node Package Manager），它是一个以 Javascript 编写的软件包管理系统，默认环境为 Node.js  
  ``` Bash
  $ yum install npm
  ```
  安装nrm是npm的资源管理器,借助各个工具可以方便快捷对npm的源进行管理  
  ``` Bash
  $ npm install nrm -g --registry https://registry.npm.taobao.org
  ```
  由于国内的网络网络问题从指定的淘宝源下载  
  ``` Bash
  $ sudo npm install nrm -g --registry https://registry.npm.taobao.org
  ```
  接下来利用nrm对npm的资源进行管理,通过nrm我们将默认下载源设置为淘宝源  
  ``` Bash
  $ nrm use taobao
  ```
