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
            <h3>今天</h3>
            <p>4/7°</p>
          </div>
          <div class="t-right">
            <h3>多云转晴</h3>
            <div class="w-img">
              <p>良</p>
              <img style="width:20px" src="../../../public/images/index/0.png" alt />
            </div>
          </div>
        </van-col>
        <!-- 右边 -->
        <van-col class="tomorrow" span="12">
          <div class="m-left">
            <h3>明天</h3>
            <p>4/7°</p>
          </div>
          <div class="m-right">
            <h3>多云转晴</h3>
            <p>良</p>
          </div>
        </van-col>
      </van-row>
      <!-- 生活指数 -->
      <van-grid class="life1">
        <van-grid-item text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
      </van-grid>
      <van-grid class="life2">
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
        <van-grid-item icon="photo-o" text="文字"></van-grid-item>
      </van-grid>
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
         week:"",
         winddirect:"",
         windpower:"",
         windspeed:"",
         daily:[],//一周七天的
         index:[],//不一定全用
      }
   },
   created() {
    //会在组件创建成功之后自动调用该函数
    // 自动在组件创建完成之后发送ajax请求
   $.ajax({
      url : "https://api.jisuapi.com/weather/query?appkey=90b47e2a6f6c02d3&city=北京",
      type : "GET",
      dataType : "jsonp",
      success : res=>{
         console.log("发送天气请求成功");
         console.log(res.result);
         
      }

   });










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
  height: 16rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
}
.today,
.tomorrow {
  border: 1px solid #ddd;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
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
  height: 1.875rem;
}
.w-img img {
  width: 100% !important;
}
</style>
