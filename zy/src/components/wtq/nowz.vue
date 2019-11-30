<template>
  <div>
    <div v-if="hasWz" id="no-wz">
      <div class="img">
        <!-- 问诊 -->
        <img src= "../../../public/images/index/急速问诊/empty2.png">
      </div>
      <div class="text">
        您还没有发起过任何问诊
      </div>
    </div>
    <div v-else class="has_wz">
      <div class="pics"  v-for="(item,i) of result" :key="i">
        <h2 style="color:#36d;">问诊信息</h2>
        <div>
          <p>问诊详情：<span>{{item.msg}}</span></p>
          <img :src="`http://127.0.0.1:5050${item.baseUrl}`">
        </div>
        <div>
          <span>{{new Date(item.time).toLocaleString()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      hasWz:false,
      result : {}
    }
  },
  created(){
    this.axios.get("http://zhuanyi.applinzi.com/user/showPics").then(res=>{
      if(res.data.code == -1){
        this.hasWz = true;
      }else if(res.data.code == -2){
        this.$router.push("pwdLogin");
      }else{
        this.result = res.data.result;
      }
    });
  }
}
</script>
<style scoped>
  #no-wz{
    padding-top:5rem;
  }
  .img{
    width:60%;
    margin:auto;
  }
  .img img{
    width:100%;
  }
  .text{
    color:#83889a;
    font-size:1rem;
    text-align:center;
    margin-top:.5rem;
  }
  .has_wz{
    padding:.977099rem;
  }
  .has_wz p{
    font-size: 1.2rem;
    color:#000;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .has_wz p>span{
    color:#36d;
    font-size: 1rem;
  }
  .has_wz .pics {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-top: 10px;
  }
  .has_wz .pics>div{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .has_wz .pics img{
    width:7.328244rem;
    border-radius: .610687rem;
  }
</style>
