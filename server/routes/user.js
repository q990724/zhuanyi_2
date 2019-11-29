const express=require("express");
var router=express.Router();
var pool=require("../pool");
var fs = require('fs');
//登录接口
router.get("/login/:phone&:upwd",function(req,res){
   var phone = req.params.phone;
   var upwd = req.params.upwd;
   if(!phone){
      res.send({code : -2 ,msg : "手机号参数获取错误"});
      return;
   }else if(!upwd){
      res.send({code : -3 ,msg : "密码参数获取错误"});
      return;
   }
   console.log(phone,upwd);

   pool.query("select * from user where phone=? and upwd=?",[phone,upwd],function(err,result){
      if(err) throw err;
      if(result.length > 0){
         req.session.uid = result[0].uid;
         console.log("session uid:" + req.session.uid);
         res.send({code : 1 , msg : "登录成功" , data : result});
      }else{
         res.send({code : -1 , msg : "登录账号或密码错误"});
      }
   });

});

//注册接口
router.get("/reg",function(req,res){
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   var sql="insert into user(uname,upwd) values(?,?)";
   pool.query(sql,[uname,upwd],(err,result)=>{
      if(err) throw err;
      if(result.affectedRows==1){
         res.send({code:1,msg:"注册成功"});
      }else{
         res.send({code:-1,msg:"注册失败"});
      }
   })
})

//查询用户预约信息
router.get("/showUserOrder",function(req,res){
   var uid = req.session.uid;
   if(!uid){
      res.send({code : -2, msg :'未登录,请重新登录'});
      return;
   }

   var sql = "select * from user_orders where uid = ?";
   pool.query(sql,[uid],function(err,result){
      if(err) throw err;
      if(result.length > 0){
         res.send({code : 1 , msg : "查询成功" , data : result});
      }else{
         res.send({code : -1 , msg : "还没有预约过任何医生!"});
      }
   });
});
//插入用户预约信息
router.get("/insertUserOrder",function(req,res){
   var uid = req.session.uid;
   var did = req.query.did;
   var hname = req.query.hname;
   var class_name = req.query.class_name;
   var class_subname = req.query.class_subname;
   var order_number = req.query.order_number;
   var order_time = req.query.order_time;
   var down_time = req.query.downtime;
   var status = req.query.status;

   if(!uid){
      res.send({code : -2, msg :'未登录,请重新登录'});
      return;
   }

   var sql = "insert into user_orders values(null,?,?,?,?,?,?,?,?,?)";
   pool.query(sql,[uid,did,hname,class_name,class_subname,order_number,order_time,down_time,status],function(err,result){
      if(err) throw err;
      if(result.affectedRows >= 0){
         res.send({code : 1 , msg : "插入成功"});
      }else{
         res.send({code : -1 , msg : "插入失败"});
      }
   });
});

//删除某条用户预约信息
 router.get("/removeUserOrder",function(req,res){
    var uid = req.session.uid;
    var did = req.query.did;
 
    if(!uid){
       res.send({code : -2, msg :'未登录,请重新登录'});
       return;
    }
 
    var sql = "delete from user_orders where did=? and uid=?";
    pool.query(sql,[did,uid],function(err,result){
       if(err) throw err;
       if(result.affectedRows > 0){
          res.send({code : 1 , msg : "删除成功"});
       }else{
          res.send({code : -1 , msg : "删除失败"});
       }
    });
 });

//判断用户是否已经登录
router.get("/islogin",function(req,res){
   if(!req.session.uid){
     res.send({code : -1 , msg : "未登录!"});
   }else{
     res.send({code : 1 , msg : "已登录"});
   }
 });

 //上传图片接口
 router.post("/uploadFile",(req,res)=>{
   var uid = req.session.uid;
   var base = req.body.base;
   //console.log(base);
   var msg = req.body.msg;
   var time = req.body.time;
   if(!uid){
      res.send({code : -2 , msg : "未登录"});
      return;
   }

   //解析图片
   var path = 'public/upload/'+ new Date().getTime() +'.png';
   var base64 = base.replace(/\s+/g,"+");
   base64 = base64.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
   
   var dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象
   fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
      if(err){
          res.send({code : -1 , msg : "上传失败，解析错误"});
      }else{
        var sql = "insert into user_question values(null,?,?,?,?)";
        var afterPath = path.slice(6);
        console.log(afterPath);
        pool.query(sql,[uid,msg,afterPath,time],(err,result)=>{
          if(err) throw err;
          if(result.affectedRows > 0){
            res.send({code : 1 , msg : "上传成功！"});
          }else{
            res.send({code : -1 , msg : "上传失败!"});
          }
        });
      }
   })
  
   
 });

 //查询用户的图片问诊
 router.get("/showPics",(req,res)=>{
   var uid = req.session.uid;
   if(!uid){
     res.send({code : -2 , msg :"未登录!"});
     return;
   }
   var sql = "select * from user_question where uid=?";
   pool.query(sql,[uid],(err,result)=>{
     if(err) throw err;
     if(result.length>0){
       res.send({code : 1 , msg : '查询成功',result : result});
     }else{
       res.send({code : 0 , msg : "还没有提交过图片问诊!"});
     }
   });
 });

module.exports=router;