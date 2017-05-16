/**
 * Created by asus on 2017/ / .
 * Worker hejian .
 * Location zdh_lab .
 * content
 * ҵ���߼���
 * 1.�����ݿ⡢2.�����캯����3.�����ݡ�4.������
 * ���캯����@param email @param post @param time
 * �����ݣ�@param email  @param callback
 * �����ݿ�(@param err @param db)-->���ĸ����ݿ��ļ�(@param �ļ� @param err @param collection)-->���ĸ�����-->�ҵ�������ת�����鲢�ұ������빹�캯��-->�ѹ��캯���������鷵�ظ��ص�����
 * ������: @param callback      
 * ���ĸ�����-->�����ݿ�(@param err @param db)-->���ĸ����ݿ��ļ�(@param �ļ� @param err @param collection)-->����˭�������-->�������ݿ�(����,@param err)
 */

//�����ݿ�
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('123.206.56.83', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});

function Post(email,post,time){
	this.email=email;
	this.post=post;
	//���ʱ��Ϊ�գ������õ�ǰʱ��
	if(time){
		this.time=time;
	}else{
		this.time=new Date();
	}
}
//��
Post.find=function (email,callback){
	//�����ݿ�
	db.open(function (err,db){
		if(err){
			db.close();
			return callback(err);
		}
			//���ļ�
		db.collection("posts1",function(err,collection){
			if(err){
				db.close();
				return callback(err);
			}
			//�ҵ�posts�ļ���Ҫ�ҵ�email����ʱ������email�������ĵ���Ϣ
			var query={};
			if(email){
				query.email=email;
			}
			//���յ���ʱ��������ת������
			collection.find(query).sort({time:-1}).toArray(function (err,docs){
				db.close();//�ҵ���Ҫ�ر����ݿ�
				var userdatas=[];   //���ռ��������ݱ�������Ȼ��push��һ����������
				docs.forEach(function (doc,index){
					var post =new Post(
						doc.email,   //�ʼ��˺�
						doc.post,	 //���͵�����	
						doc.time	 //���͵�ʱ��
					)
					userdatas.push(post); //push
				})
				callback(null,userdatas); //�������ص�����
			})		
		})
	})
}
module.exports=Post;

//��
Post.prototype.save=function (callback){
	//���ĸ�����
	var userdatas={
		email:this.email,
		post:this.post,
		time:this.time
	}
	//�����ݿ�-->���ĸ����ݿ��ļ�-->����˭�������-->�������ݿ�
	db.open(function (err,db){
	  if(err){
			return callback(err);
		}
	  //���ļ�
	  db.collection("posts1",function (err,collection){
			if(err){
				db.close();
				return callback(err);
			}
			//������
		  //	collection.ensureIndex({"email":1});
			//������
			collection.insert(userdatas,{safe:true},function (err){
				db.close();
				callback(err);
			})
		})
	})
}
