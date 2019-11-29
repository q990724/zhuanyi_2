<template>
  <div class="my-register">
    <van-nav-bar title="预约信息" left-arrow @click-left="onClickLeft"/>
    <div class="doc-title">
      <img :src="doctorDetail.pic">
      <span>{{doctorDetail.name}}</span>
      医生
    </div>
    <div class="information">
      <div>
        <div class="information-item">
          <span>就诊医院:</span>
        </div>
        <div class="information-item">
          <span>{{hospitalDetail.hospital ? hospitalDetail.hospital : hospitalDetail.regaddress}}</span>
        </div>
      </div>
      <div>
        <div class="information-item">
          <span>科室医生:</span>
        </div>
        <div class="information-item">
          <span>{{orderStep.className}} - {{doctorDetail.name}}</span>
        </div>
      </div>
      <div>
        <div class="information-item">
          <span>门诊时间:</span>
        </div>
        <div class="information-item">
          <span
            class="text-color"
          >{{time}}</span>
        </div>
      </div>
      <div>
        <div class="information-item">
          <span>门诊类型:</span>
        </div>
        <div class="information-item">
          <span>专家门诊</span>
        </div>
      </div>
      <div>
        <div class="information-item">
          <span>费用:</span>
        </div>
        <div class="information-item">
          <span>100元 （挂号费）</span>
        </div>
      </div>
    </div>
    <div class="be-careful">
      <van-collapse v-model="activeNames" :accordion="false" style="padding:0;">
        <van-collapse-item name="1">
          <div slot="title">
            <span>挂号费由医院自行设定，平台不收取任何额外费用。</span>
            <br>
            <span>我已了解并同意以下规则（点击查看详情）</span>
          </div>
          <p>停诊将短信通知，请保持手机畅通</p>
          <p>实名制预约，就诊人信息不符将无法取号</p>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="tips">
      <span>本院仅支持身份证;此为分时号源，支付成功后不能取消，需到医院现场取消</span>
    </div>
    <div class="patient">
      <div>
        <div>
          <span>就诊人:</span>
        </div>
        <div>
          <router-link to>{{uname}}</router-link>
          <i></i>
        </div>
      </div>
    </div>
    <div class="patient">
      <div>
        <div>
          <span>预约时间段:</span>
        </div>
        <div>
          <span @click="open">{{time}}</span>
          <i></i>
        </div>
      </div>
    </div>
    <div class="patient">
      <div>
        <div>
          <span>所患疾病:</span>
        </div>
        <div>
          <span @click="open2" class="a_color">{{dis}}</span>
          <i></i>
        </div>
      </div>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="phoneMethod"
      @click-overlay="hide"
      style="width:27rem;"
    />
    <van-action-sheet
      v-model="show2"
      :actions="actions2"
      cancel-text="取消"
      @cancel="onCancel2"
      @select="phoneMethod2"
      @click-overlay="hide2"
      style="width:27rem;"
    />
    <button class="my-register-btn" @click="submit">提交</button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
axios.defaults.baseURL = "http://127.0.0.1:5050/";
export default {
  data() {
    return {
      uname:"",
      orderStep:{},
      hospitalDetail:{},
      doctorDetail:{},
      activeNames: ["1"],
      show: false,
      show2: false,
      actions: [
        { name: "08:00-08:59" },
        { name: "09:00-09:59" },
        { name: "10:00-10:59" },
        { name: "14:00-14:59" },
        { name: "15:00-15:59" },
        { name: "16:00-16:59" }
      ],
      time: "08:00-08-59",
      doctor: {},
      orderMsg: {},
      uname: "",
      dis: "请选择疾病",
      actions2: [
        { name: "关节炎" },
        { name: "骨质增生" },
        { name: "骨折" },
        { name: "骨关节炎" },
        { name: "骨瘤" },
        { name: "骨质疏松" }
      ]
    };
  },
  methods: {
    onClickLeft: function() {
      this.back(this);
    },
    open() {
      this.show = !this.show;
    },
    open2() {
      this.show2 = !this.show2;
    },
    hide() {
      this.show = false;
    },
    hide2() {
      this.show2 = false;
    },
    phoneMethod(item) {
      var str = item.name;
      this.time = str;
      this.show = false;
    },
    phoneMethod2(item) {
      var str = item.name;
      this.dis = str;
      this.show2 = false;
      console.log(item, this.dis, str);
    },
    onCancel() {
      this.show = false;
    },
    onCancel2() {
      this.show2 = false;
    },
    submit() {
      //只是单纯提交用户的所有信息
      var orderStep = this.$store.getters.getOrderStep;
      var hospitalDetail = this.$store.getters.getHospitalDetail;
      var doctorDetail = this.$store.getters.getDoctorDetail;
      //用户预约所需信息
      var userInfo = {
        did: orderStep.did,
        className: orderStep.className,
        hname: hospitalDetail.hospital,
        class_name: orderStep.className,
        class_subname: orderStep.classSubname,
        order_number: 0,
        order_time:
          new Date().getFullYear() +
          "年" +
          new Date().getMonth() +
          "月" +
          new Date().getDate() +
          "日 " +
          this.time,
        downtime: new Date().getTime(),
        status: 1
      };
      
      (async () => {
        var bool = await this.checkOrder(userInfo.did);
        console.log(bool)
        if (!bool){
          return;
        }else{
          var count = await this.computedOrderNumber(userInfo.did);
          userInfo.order_number = count;
          var insertUser = await this.insertUserOrder(userInfo); //返回的是bool值
          if (insertUser) {
            //如果插入成功,就继续插入医生列表
            console.log("插入用户成功");
            console.log(count);
            // 然后再插入到医生列表中
            var insertDoctor = await this.insertDoctorOrder(
              userInfo.did,
              userInfo.order_number
            );
            if (insertDoctor) {
              Toast.success({message:"预约成功！",onOpened:()=>{
                this.$router.push("/");
              }});
            } else {
              Toast.fail({message:"预约失败！",onOpened:()=>{
                this.$router.push("/");
              }});
            }
          } else {
            //否则提示 插入失败
            Toast.fail({message:"预约失败！",onOpened:()=>{
                this.$router.push("/");
              }});
          }
          };
        
      })();
    },
    computedOrderNumber(did){
      //计算病人的订单号(传对应医生的编号),查找对应医生所有病人的编号,然后排序,返回的是一个当前病人的编号
      return new Promise( (resolve,reject)=>{
        axios.get(`doctor/showDoctorOrder/${did}`)
        .then(res=>{
          console.log(res.data.data);
          //返回的结果计算
          var result = res.data.data;
          var count = 0;//病人订单的编号
          if(res.data.code == -1){
            count = 1;
          }else{
            result.sort( (a,b)=>{//排好序
              return a.order_number - b.order_number;
            } )
            count = result[result.length-1].order_number+1;
            console.log(result);
          }
          
          resolve(count);
        })
      })
    },
    insertUserOrder(params){
      // 传一个参数
      return new Promise( (resolve,reject) =>{
        // 插入用户预约信息--返回的就是插入成功或失败 , 返回一个布尔值
        axios.get("/user/insertUserOrder",{params}).then(res=>{
          console.log(res);
          if(res.data.code == -1){
            resolve(false)
          }else{
            resolve(true)
          }
        }).catch(err=>{
          console.error(err);
          Toast.fail("服务器繁忙")
        })
      });
    },
    //插入医生的预约信息---医生编号.还有病人排好序的编号--返回bool值,插入成功或失败
    insertDoctorOrder(did,order_number){
      return new Promise( (resolve,reject)=>{
        axios.get("/doctor/insertDoctorOrder",{
          params:{
            did,order_number
          }
        }).then(res=>{
          console.log(res);
          if(res.data.code == -1){
            resolve(false)
          }else{
            resolve(true)
          }
        }).catch(err=>{
          console.log(err);
          Toast.fail("服务器繁忙")
        })
      } )
    },
    
    checkOrder(did){
      return new Promise( (resolve,reject)=>{
        axios.get("/user/showUserOrder").then(res=>{
          console.log(res);
          if(res.data.code == 1){//查询成功
            var arr = res.data.data;
            for(var i = 0; i < arr.length; i++){
              if(arr[i].did == did){
                resolve(false);
                Toast.fail({message:"您已预约过此医生！",onOpened:()=>{
                this.$router.push("/");
              }});
              }else if(i == arr.length-1){
                resolve(true);
              }
            }
          }else if(res.data.code == -1){
            resolve(true);
          }
        }).catch(err=>{
          console.log(err);
        })
      })
    }
  },
   created(){
    this.orderStep = this.$store.getters.getOrderStep;
    this.hospitalDetail = this.$store.getters.getHospitalDetail;
    this.doctorDetail = this.$store.getters.getDoctorDetail;
    this.uname=JSON.parse(sessionStorage.getItem('user')).user_name;
    if(!this.uname){
      var t=new Date().getTime().toString().slice(-4);
      this.uname="zhuanyi"+t;
    }
  }
}
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #000;
}
.doc-title {
  padding: 0.3125rem 0.625rem;
  border-bottom: 0.04266667rem solid #eee;
  height: 3.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2.5rem;
  background: #fff;
  font-size: 0.75rem;
  color: #83889a;
  box-sizing: border-box;
}
.doc-title img {
  width: 2.6875rem;
  height: 2.6875rem;
  border-radius: 50%;
  border: 0.08533333rem solid #fff;
  box-sizing: border-box;
}
.doc-title span {
  display: inline-block;
  height: 100%;
  line-height: 2.4;
  font-size: 1.03125rem;
  color: #333;
  margin: 0 0.75rem 0 0.625rem;
  font-weight: 500;
}
.information {
  background: #fff;
  color: #a6a8b6;
  font-size: 0.875rem;
  border-bottom: 0.0375rem solid #eeeeee;
  padding: 0.7rem;
}
.information div {
  display: flex;
  width: 100%;
}
.information div > .information-item:first-child {
  width: 22%;
}
.information div > .information-item:last-child {
  text-align: left;
  width: 78%;
  color: #333;
}
.information-item {
  height: 1.79375rem;
  line-height: 1.79375rem;
  box-sizing: border-box;
}
.text-color {
  color: #3278ee;
}
.be-careful {
  background: #fff;
  padding: 0.7rem 0 0.7rem 0.7rem;
}
.van-cell span:first-child {
  color: #3278ee;
  font-size: 0.875rem;
}
.van-cell span:last-child {
  color: #83889a;
}
.van-cell {
  padding: 0;
}
.van-collapse-item__content p {
  color: #83889a;
  font-size: 0.9375rem !important;
}
.van-collapse-item__content p::before {
  content: "\B7";
}
.tips {
  border-top: 0.0375rem solid #eee;
  font-size: 0.9375rem;
  color: #c4c5ce;
  background: #ffffff;
  height: 3.625rem;
  line-height: 1;
  padding: 0.7rem 1.7rem 0 1.7rem;
  box-sizing: border-box;
}
.tips span {
  display: inline-block;
  height: 2.625rem;
  line-height: 1.35;
}
.patient {
  background: #fff;
  margin-top: 0.7rem;
}
.patient div {
  padding: 0 0.7rem;
  display: flex;
  height: 2.75rem;
  line-height: 2.75rem;
}
.patient div > div:first-child {
  width: 65%;
  color: #a6a8b6;
  margin-right: 0.75rem;
  font-size: 1rem;
}
.patient div > div:last-child {
  width: 35%;
  position: relative;
  text-align: right;
}
.patient div > div:last-child a,
.patient div > div:last-child span {
  display: inline-block;
  width: 100%;
  color: #28354c;
}
.patient div > div:last-child i {
  position: absolute;
  top: 1.34375rem;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-left: 0.03125rem solid #999;
  border-bottom: 0.03125rem solid #999;
  transform: translate(0, -50%) rotate(-135deg);
}
.a_color {
  color: #c4c5ce !important;
}
.my-register-btn {
  display: block;
  height: 3.2rem;
  line-height: 3.2rem;
  font-size: 1.0625rem;
  background-color: #3f86ff;
  color: #fff;
  width: 90%;
  margin: 1.25rem auto;
  border-radius: 3.125rem;
  border: 0;
}
</style>
