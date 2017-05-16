## 数据的查找与插入
***
``` javascript
/** 
 * Created by asus on 2017/ 5/13 . 
 * Worker hejian . 
 * Location zdh_lab . 
 * content ：连接数据库、find方法、save方法 
 */ 
 //连接数据库 
var  mongodb = require('mongodb'); 
var  server  = new mongodb.Server('123.206.56.83', 27017, {auto_reconnect:true}); 
var  db = new mongodb.Db('mydb', server, {safe:true}); 
//构造函数 
 function User(user){ 
    this.email=user.email; 
    this.password=user.password; 
    this.sex=user.sex; 
 } 
/** 
 * 构造函数下面的find方法 
 * @param username  用户名 
 * @param callback  回调函数 
 */ 
 User.find = function (useremail,callback){ 
    //开数据库 @param err  @param db 
    db.open(function (err,db){ 
        //error时 
        if(err){ 
            return callback(err); 
        } 
        //不是error 找出user用户的这张文件 
        db.collection("users",function (err,collection){ 
             
            if(err){ 
                db.close(); 
                return callback(err); 
            } 
            //在文件中找 name=username的json 
            collection.findOne({email:useremail},function (err,doc){ 
                db.close(); 
                if(doc){ 
                    //储存起来 
                    var user = new User(doc); 
                    callback(err,user); 
                } 
 
                else{ 
                    callback(err,null); 
                } 
 
            }) 
        }) 
    }) 
 } 
 
module.exports=User; 
/** 
 * 构造函数下面的save方法 
 * @param callback  回调函数 
 */ 
User.prototype.save=function (callback){ 
    //数据 
    var user={ 
        email:this.email, 
        password:this.password, 
        sex:this.sex 
    } 
    db.open(function (err,doc){ 
        if(err){ 
            return callback(error); 
        } 
        //读取users集合 
        db.collection("users",function (err,collection){ 
            if(err){ 
                db.close(); 
                return callback(err); 
            } 
            //以name属性建索引，索引是唯一的 
            collection.ensureIndex("email",{unique:true}); 
            //把user数据以安全方式写入users里面 
            collection.insert(user,{safe:true},function(err){ 
                db.close(); 
                callback(err); 
            }) 
        }) 
    }) 
}
```
