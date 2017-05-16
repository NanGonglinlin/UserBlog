/**
 * Created by asus on 2017/ 5/13 .
 * Worker hejian .
 * Location zdh_lab .
 * content ���������ݿ⡢find������save����
 */
 //�������ݿ�
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('123.206.56.83', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mydb', server, {safe:true});
//���캯��
 function User(user){
	this.email=user.email;
	this.password=user.password;
	this.sex=user.sex;
 }
/**
 * ���캯�������find����
 * @param username  �û���
 * @param callback  �ص�����
 */
 User.find = function (useremail,callback){
	//�����ݿ� @param err  @param db
	db.open(function (err,db){
		//errorʱ
		if(err){
			return callback(err);
		}
		//����error �ҳ�user�û��������ļ�
		db.collection("users",function (err,collection){
			
			if(err){
				db.close();
				return callback(err);
			}
			//���ļ����� name=username��json
			collection.findOne({email:useremail},function (err,doc){
				db.close();
				if(doc){
					//��������
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
 * ���캯�������save����
 * @param callback  �ص�����
 */
User.prototype.save=function (callback){
	//����
	var user={
		email:this.email,
		password:this.password,
		sex:this.sex
	}
	db.open(function (err,doc){
		if(err){
			return callback(error);
		}
		//��ȡusers����
		db.collection("users",function (err,collection){
			if(err){
				db.close();
				return callback(err);
			}
			//��name���Խ�������������Ψһ��
			collection.ensureIndex("email",{unique:true});
			//��user�����԰�ȫ��ʽд��users����
			collection.insert(user,{safe:true},function(err){
				db.close();
				callback(err);
			})
		})
	})
}
