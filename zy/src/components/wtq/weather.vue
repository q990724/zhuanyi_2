<template>
   <div id="weather">
      <!-- 天气组件 -->
      <div class="weather-area">
         <!-- 第一行  两部分 今天  明天 -->
         <van-row class="area" justify="space-between">
            <!-- 左边 -->
            <van-col class="today" span="12" >
               <div class="t-left">
                  <h3>今天</h3>
                  <p>4/7°</p>
               </div>
               <div class="t-right">
                  <h3>多云转晴</h3>
                  <div class="w-img">
                     <p>良</p>
                     <img style="width:20px" src="../../../public/images/index/0.png" alt="">
                  </div>
                  

               </div>
            </van-col>
            <!-- 右边 -->
            <van-col class="tomorrow" span="12" >
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
            <van-grid-item text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
         </van-grid>
         <van-grid class="life2">
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
            <van-grid-item icon="photo-o" text="文字" ></van-grid-item>
         </van-grid>
         </div>
   </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>

.weather-area{
   width:95%;
   margin:auto;
   height:16rem;
   padding:.625rem;
   border-radius:.625rem;
}
.today,.tomorrow{
   border:1px solid  #ddd;
   height:4rem;
   background-color:rgba(0,0,0,.1);
   display:flex;
   justify-content: space-around;
   line-height:2rem;
   border-radius:.625rem;
}
.life1{
   margin-top:.625rem;
}
.van-grid-item__content{
   background-color:rgba(0,0,0,.1);
}
.w-img{
   height: 1.875rem;
}
.w-img img{
   width:100%;
}
</style>
