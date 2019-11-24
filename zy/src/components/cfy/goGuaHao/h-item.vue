<template>
   <router-link to="chooseClass">
      <div class="hitem">
         <van-row>
            <van-col span="5" class="pic">
               <img :src="`http://127.0.0.1:5050/${item.hpic}`">
            </van-col>
            <van-col span="19" class="content">
               <h5>{{item.hname}}</h5>
               <div><span>{{item.hrank}}</span> <span>{{item.hmajor}}</span></div>
               <p><span>{{item.comment_msg}}</span></p>
            </van-col>
         </van-row>
      </div>
   </router-link>
   
</template>

<script>
export default {
   props : ["item"],
   data(){
      return{
         
      }
   }
}
</script>

<style scoped>
   a{
      color: #000;
   }
   .hitem{
      padding: 1.5rem .625rem;
      position: relative;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
   }
   .pic img{
      width: 100%;
      height: 100%;
      border-radius: .1875rem;
   }

   .hitem .content{
      display: flex;
      justify-content: space-around;
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
