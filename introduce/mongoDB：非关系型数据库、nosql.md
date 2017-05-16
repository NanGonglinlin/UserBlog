## nosql（非关系型数据库）
   ***
   数据库主要分为关系型数据库和非关系型数据库  
   常见关系型数据库：Oracle(甲骨文)、MySQL(甲骨文)、SQL Server(Microsoft),关系型数据库最大的特点就是有关系模型，也就是表结构  
   常见非关系型数据库：Redis，MongoDB，他们都被称为Key-Value数据库，因为数据库里面存的不是表，而叫文件，在MongDB里面存放的json  
## mongoDB的基本操作
   ***
   查看所有数据库  
   
   ``` Bash
   $ show dbs
   ```
   
   使用数据库名为dbname的数据库  
   
   ``` Bash
   $ use dbname
   ```
   
   查看数据库名为dbname下的所有文件  
   
   ``` Bash
   $ show collections
   ```
   
   找文件名为collections_name的所有数据 find()里面可为空可为Json  
   
   ``` Bash
   $ db.collections_name.find({json/null})
   ```
   
   给文件名为collections_name插入数据 insert()里面可为空可为Json  
   
   ``` Bash
   $ db.collections_name.insert({json/null})
   ```
   
   删文件名为collections_name的数据 remove()里面可为空可为Json  
   
   ``` Bash
   $ db.collections_name.remove({json/null})
   ```
   
