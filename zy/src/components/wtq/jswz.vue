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
    <!-- 上方图片 -->
    <div class="top-img">
      <!-- 在线接诊医生数 -->
      <div class="top-text">
        <p>当前在线接诊医生人数</p>
        <div class="top-count">
          <!-- 数量显示 -->
          
        </div>
      </div>
    </div>


    <!-- 下方选择问诊区域 -->
    <div class="select-area">
      <van-tabs v-model="active" color="#36d">
        <van-tab title="图文问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">
              ¥19
            </h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price dan">
              ¥9
            </h2>
          </div>
        </van-tab>
        <van-tab title="电话问诊">
          <!-- 第一个问诊连接 -->
          <div class="first-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">
              ¥29
            </h2>
          </div>
          <!-- 第二个问诊链接 -->
          <div class="second-wz">
            <div class="text1">
              <h3>三甲主治及以上级别接诊</h3>
              <P>服务人次 24.8万</P>
            </div>
            <h2 class="price">
              ¥19
            </h2>
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
          <p class="helped" >已有 XXXX 患者获得帮助</p>
        </van-col>
      </van-row>
      <!-- 组件 列表 -->
      <!--   -->
      <van-swipe style="height: 150px;" vertical :autoplay = "4000" :show-indicators=false :duration = "4000">
        <van-swipe-item>
          <ul class="people-list">
            <li>北京 的患者张**购买了 <span data-id="price">¥19</span> 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 <span data-id="price">¥19</span> 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 <span data-id="price">¥19</span> 电话问诊 <span>3分钟前</span></li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul class="people-list">
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
            <li>北京 的患者张**购买了 ¥19 电话问诊 <span>3分钟前</span></li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>                 
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:0,
    }
  }
}
</script>

<style scoped>

  .top-img{
    background:url('../../../public/images/index/急速问诊/bg.png') no-repeat;
    background-size:100% auto;
    width:100%;
    height:23rem;
    /* position:relative; */
  }
  .top-text p{
    font-weight:400;
    color:#83889a;
    font-size:.8rem;
    position:absolute;
    top:100px;
    left:3rem;
  }
  .helped{
    text-align:right;
    font-size:15px;
    color:#83889a;
    margin-top:5px;
    padding-right:3rem;
  }
  .select-area{
    width:90%;
    height:17.832061rem;
    margin:auto;
  }
  .first-wz,.second-wz{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    height:70px;
    align-items:center;
    padding:10px;
  }
  
  .select-area p{
    padding:5px 0;
    color:#5e616b;
  }
  
  .first-wz{
    background:#fff6e6;
    
  }
  .second-wz{

  }
  .text{
    text-align:center;
    width:11.847328rem;
    height:3.70229rem;
    background:#ccc;
    border-radius:.3rem;
    line-height:3.7rem;
  }
  .text.actice{
    background:#fff !important;
  }
  .text.three-minute span{
    background:url('../../../public/images/index/急速问诊/3.png') no-repeat;
    background-size:25%;
    background-position:9rem 0;
    
  } 
  .text.eight-zhe span{
    background:url('../../../public/images/index/急速问诊/8zhe.png') no-repeat;
    background-size:25%;
    background-position:9rem 0;
  }

  .second-wz{
    background:#e5edf6;
  }
  .pic-wz-area{
    background:#ddd;
  }
  .people-list{
    width:80%;
    margin:auto;
    margin-top:1.8rem;
  }
  .people-list li{
    margin-top:.8rem;
    color:#28354c;
    font-size:1rem;
  }
  .people-list span{
    color:#83889a;
    font-size:.6rem;
  }
</style>