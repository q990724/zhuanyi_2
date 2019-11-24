<template>
   <div class="hitem">
      <van-row>
         <van-col span="5" class="pic">
            <img src="../../../../public/images/index/去挂号/h1.png">
         </van-col>
         <van-col span="19" class="content">
            <h5>中国人民解放军总医院301医院</h5>
            <div><span>三级甲等</span> <span>综合医院</span></div>
            <p><span>全国综合榜患者好评第2名</span></p>
         </van-col>
      </van-row>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>

   .hitem{
      padding: .625rem;
      position: relative;
   }
   .pic img{
      width: 100%;
      height: 100%;
      border-radius: .1875rem;
   }

   .hitem .content{
      /* position: absolute;
      top: 0;
      bottom: 0; */
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding-left: .9375rem;
   }

   .hitem .content >div > span,.hitem .content > p{
      font-size: .675rem;
      margin-top:.425rem;
   }

   .hitem .content >div > span:first-child{
      color: #ff695c;
   }

   .hitem .content >div > span:last-child{
      color: #888;
   }

   .hitem .content > p >span{
      background: #e0ebfa;
      display: inline-block;
   }
</style>
