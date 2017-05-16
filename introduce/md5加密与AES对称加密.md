## md5加密算法
***
将密码进行md5加密，md5学名叫单项散列算法，是输出的128位的信息（数字指纹，防止修改，防止看明文），是不可逆的，但是简单的密码加密有规律性，可暴力破解，至于原理是什么，我也不是很了解，只是会使用而已。  
MD5算法原理：http://blog.csdn.net/forgotaboutgirl/article/details/7258109  
以下是加密  
``` javascript
    var crypto = require("crypto");
    var password=req.body.psw;
    var md5=crypto.createHash("md5");
    var psw=md5.update(password).digest("base64");

```
## 勒索病毒的AES对称算法加密
***
   有趣的是最近(2017/5/16)勒索病毒侵袭互联网，其利用了除win10以为未打补丁的win用户的ms17-010漏洞实现自身的快速感染与扩撒，有人说是NSA故意泄露的，有人说这是美国的阴谋，又有人说这是微软想让世界windows用户升级系统到win10，就在今天微软CEO居然说黑客是在朝鲜，哎呀，我的妈呀，金三胖的帝国的人民居然有这么大的本事（开个玩笑~）话归正题这个AES对称算法到底是怎么实现的？我查了查资料，AES加密算法是基于置换和代替的，置换就是数据的逐字节重新排列，代替就是单元矩阵的替换，其分组长度和秘钥长度为128比特  
    详细算法：http://www.2cto.com/article/201112/113465.html  
