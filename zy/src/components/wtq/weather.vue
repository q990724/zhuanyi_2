<!--
 * @Author: your name
 * @Date: 2019-11-26 23:34:37
 * @LastEditTime: 2019-11-27 01:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\weather.vue
 -->
<template>
  <!-- 天气是在首页组件 -->
  <div id="weather">
    <!-- 天气组件 -->
    <div class="weather-area">
      <!-- 第一行  两部分 今天  明天 -->
      <van-row class="area" justify="space-between">
        <!-- 左边 -->
        <van-col class="today" span="12">
           <!-- 地点  先来个定位 ## -->
          <div class="t-left">
            <h3>今天({{today}})</h3>
            <p>{{ttemplow}}/{{ttemphigh}}°</p>
          </div>
          <div class="t-right">
            <!-- <h3>{{tweather}}</h3> -->
            
            <div class="w-img">
              <p>{{tquality}}</p>
              <div class="img-icon">
                <img style="width:20px" src="../../../public/images/index/0.png" alt />
              </div>
              <h3>优</h3>
            </div>
          </div>
        </van-col>
        <!-- 右边 -->
        <van-col class="tomorrow" span="12">
          <div class="m-left">
            <h3>明天({{tomorrow}})</h3>
            <p>{{wtemplow}}/{{wtemphigh}}°</p>
          </div>
          <div class="m-right">
            <div class="w-img">
              <div class="img-icon">
                <img style="width:20px" src="../../../public/images/index/0.png" alt />
              </div>
              <h3>优</h3>
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 生活指数 -->
      <div class="life">
        <van-row>
          <van-col class="life-one" span="24" >offset: 4, span: 10</van-col>
          <van-col class="life-two" span="24" >offset: 4, span: 10</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../../src/assets/js/config'
export default {
   data(){
      return{
         myownpos:"北京",
         today:"",
         tweather:"",
         twinddirect:"",
         twindpower:"",
         twindspeed:"",
         tdaily:[],//一周七天的
         tindex:[],//不一定全用,
         ttemphigh:"",
         ttemplow:"",
         tquality:"",
        //  明天
         tomorrow:"",
         wweather:"",
         wtemphigh:"",
         wtemplow:"",
      }
   },
   created() {
    //会在组件创建成功之后自动调用该函数
    // 自动在组件创建完成之后发送ajax请求--axios不支持jsonp
  //  $.ajax({
  //     url : "https://api.jisuapi.com/weather/query?appkey=90b47e2a6f6c02d3&city=北京",
  //     type : "GET",
  //     dataType : "jsonp",
  //     success : res=>{
  //        console.log("发送天气请求成功");
  //       //  console.log(res.result);
  //        var result = res.result;
  //        console.log(result);
  //        this.today = result.week;
  //        this.tweather = result.tweather;
  //        this.tquality = result.tquality;
  //        this.ttemphigh = result.temphigh;
  //        this.ttemplow = result.templow;
  //        this.winddirect = result.winddirect;
  //        this.windpower = result.windpower;
  //        this.windspeed = result.windspeed;
  //        this.daily = result.daily;
  //        this.index = result.index;
  //       //  明天
  //       this.tomorrow = result.daily[1].week;
  //       this.wweather = result.daily[1].day.weather;
  //       this.wtemphigh = result.daily[1].day.temphigh;
  //       this.wtemplow = result.daily[1].night.templow;
        
  //     }

  //  });










   // axios发送ajax
   // config.axios.get(
   //    `https://api.jisuapi.com/weather/query?appkey=90b47e2a6f6c02d3&city=${this.myownpos}`,
      
   // ).then(res=>{
   //    console.log(res.data);
   // })

/**
 * axios.get(
		"接口的相对地址",
		{
			params:{
				参数名: 参数值
			}
		}
	).then(result=>{
		//result.data才是服务器返回的结果
	})
 */
  },//组件创建之后的函数
};
</script>
<style scoped>
.weather-area {
  width: 95%;
  margin: auto;
  height: 15rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  background-color:#ccc;
}
.today,
.tomorrow {
  border: 1px solid #ddd;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding:0 .625rem;
  line-height: 2rem;
  border-radius: 0.625rem;
}
.life1 {
  margin-top: 0.625rem;
}
.van-grid-item__content {
  background-color: rgba(0, 0, 0, 0.1);
}
.w-img {
  height: 4rem;
  display:flex;
  align-items: center;
}
.w-img img {
  width: 100% !important;
}
.img-icon{
  width:3.4375rem;
}
.life-one,.life-two{
  background-color:rgba(0, 0, 0, 0.1);
  height:4.5rem;
  margin-top:.625rem;
  border-radius:.625rem;
}
</style>
