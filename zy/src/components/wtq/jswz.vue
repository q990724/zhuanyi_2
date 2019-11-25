<!--
 * @Author: your name
 * @Date: 2019-11-24 21:32:32
 * @LastEditTime: 2019-11-24 22:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\json\jswz.vue
 -->
<template>
  <div id="jxwz">
    <!-- 组件头部 -->
    <van-nav-bar title="急速问诊" left-arrow @click-left="onClickLeft"/>
    <!-- 上方图片 -->
    <div class="top-img">
      <!-- 在线接诊医生数 -->
      <div class="top-text">
        <p>当前在线接诊医生人数</p>
        <div class="top-count">
          <!-- 数量显示 -->
        </div>
      </div>
      <!-- canvas 绘图 -->
      <canvas id="mycanvas" width="200px" height="300px">
        <!-- <div style="display:none">
          <img ref="conf0" src="../../../public/images/index/急速问诊/top-entry-health.png">
        </div>
        <div style="display:none">
          <img ref="conf1" src="../../../public/images/index/急速问诊/top-entry-health.png">
        </div> -->
      </canvas>
    </div>

    <!-- 下方选择问诊区域 -->
    <div class="select-area">
      <van-tabs v-model="active" color="#36d" title-active-color="#3f86ff" style="font-weight:700">
        <van-tab title="图文问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥19</h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price dan">¥9</h2>
          </div>
        </van-tab>
        <van-tab title="电话问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥29</h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">¥19</h2>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 问诊动态 -->
    <div class="ask-active">
      <van-row justify="spacec-between">
        <van-col offset="2" span="8">
          <h2 style="color:#28354c">问诊动态</h2>
        </van-col>
        <van-col span="14">
          <p class="helped">已有 XXXX 患者获得帮助</p>
        </van-col>
      </van-row>
      <!-- 组件 列表 -->
      <!--   -->
      <van-swipe
        style="height: 150px;"
        vertical
        :autoplay="4000"
        :show-indicators="false"
        :duration="4000"
      >
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了
              <span data-id="price">¥19</span> 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
            <li>
              北京 的患者张**购买了 ¥19 电话问诊
              <span>3分钟前</span>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 急速问诊 下标 -->
    <div class="small-icon" @click="gotomywz">
      <div class="right-icon">
        <!-- <span>我的</span>
        <span>问诊</span>-->
        <div>我的问诊</div>
      </div>
    </div>
  </div>
</template>
<script>
import goback from "./js/tz.js";
export default {
  data() {
    return {
      active: 0,
      imageUrl:[require("../../../public/images/index/急速问诊/top-entry-health.png"),require("../../../public/images/index/急速问诊/top-entry-help.png")], 
      // img1: new Image(), // 背景图片缓存
      // img2: new Image(), // 背景图片缓存
      // context: {}, // canvas对象
      // imageUrl:["../../../public/images/index/急速问诊/top-entry-health.png","../../../public/images/index/急速问诊/top-entry-help.png"],//图片路径
      isDraw : false
    };
  },
  methods: {
    onClickLeft() {
      goback(this);
    },
    gotomywz() {
      this.$router.push("/wz");
    },
    // canvas绘图
    // 画第一张图

    // 获取Canvas 画图

    // 在Canvas画布 添加图片
    // imageUrl为后台提供图片地址
    doDraw(imageUrl) {
      var canvas = document.getElementById("mycanvas");
      var ctx = canvas.getContext("2d");
      var index = 1;
      var imgs =[];
      var funs= [];
      //遍历imageUrl 创建所有图片
      for(var item of imageUrl){
        funs.push(new Promise((resolve,reject)=>{
          var img = new Image();
          img.src = item;
          img.onload = ()=>{
            resolve(img);
          }
        }))
      }

      Promise.all(funs).then(res=>{
        imgs = res;
      })

      var x = 100,y = -10;
      
      var draw = ()=>{
        if(!this.isDraw) return;
        var img;
        if(index % 2 == 1){
          img = imgs[0]
        }else{
          img = imgs[1]
        }
        var id = setInterval(()=>{
          if(x <= 10){
          x = 100;
          y = -10;
          clearInterval(id);
          return
        }else{
          if(y >= 20){
            y = 20;
          }
          ctx.clearRect(0,0,200,300);
          ctx.drawImage(img, x, y);
          console.log(x,y);
          x -= 3;
          y++;
        }
        },10);
      }

      var id2 = setInterval(()=>{
        ctx.clearRect(0,0,200,300);
        // requestAnimationFrame(draw);
        draw();
        index++;
      },3000);
      //  获取canvas  ctx.drawImage(img, 0, 0, img.width, img.height);
    },
    
  },
  mounted() {
    this.isDraw = true;
    this.doDraw(this.imageUrl);
  },
  beforeDestroy(){
    this.isDraw = false;
  }
};
</script>

<style scoped>
#mycanvas {
  position: absolute;
  right: 0;
  top: 1.25rem;
  border: 1px solid #000;
}
.small-icon {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
.right-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  font-size: 0.9375rem;
  background: #3f86ff;
  color: #fff;
  font-weight: 700;
  z-index: 99;
  /* line-height:3.5rem; */
  /* text-align:center; */
}
/* .right-icon span:first-child{
    
    position: absolute;
    top:-.5rem;
    left:-.5rem;
    
  } */

.right-icon div {
  width: 2rem;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 15%);
}
.van-nav-bar .van-icon {
  color: #000;
  font-size: 1rem;
}
.top-img {
  background: url("../../../public/images/index/急速问诊/bg.png") no-repeat;
  background-size: 100% auto;
  width: 100%;
  height: 23rem;
  position: relative;
}

.top-text p {
  font-weight: 400;
  color: #83889a;
  font-size: 1rem;
  position: absolute;
  bottom: 5rem;
  left: 2.5rem;
}
.helped {
  text-align: right;
  font-size: 15px;
  color: #83889a;
  margin-top: 5px;
  padding-right: 3rem;
}
.select-area {
  width: 90%;
  height: 17.832061rem;
  margin: auto;
}
.first-wz,
.second-wz {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 70px;
  align-items: center;
  padding: 10px;
}

.select-area p {
  padding: 5px 0;
  color: #5e616b;
}

.first-wz {
  background: #fff6e6;
}
.second-wz {
}
.text {
  text-align: center;
  width: 11.847328rem;
  height: 3.70229rem;
  background: #ccc;
  border-radius: 0.3rem;
  line-height: 3.7rem;
}
.text.actice {
  background: #fff !important;
}
.text.three-minute span {
  background: url("../../../public/images/index/急速问诊/3.png") no-repeat;
  background-size: 25%;
  background-position: 9rem 0;
}
.text.eight-zhe span {
  background: url("../../../public/images/index/急速问诊/8zhe.png") no-repeat;
  background-size: 25%;
  background-position: 9rem 0;
}

.second-wz {
  background: #e5edf6;
}
.pic-wz-area {
  background: #ddd;
}
.people-list {
  width: 80%;
  margin: auto;
  margin-top: 1.8rem;
}
.people-list li {
  margin-top: 0.8rem;
  color: #28354c;
  font-size: 1rem;
}
.people-list span {
  color: #83889a;
  font-size: 0.6rem;
}
</style>