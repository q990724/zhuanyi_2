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
      <p>问诊详情：</p>
      <div class="pics">
        <img src="../../../public/images/find/a3c23168112.jpg">
        <img src="../../../public/images/find/a3c23168112.jpg">
        <img src="../../../public/images/find/a3c23168112.jpg">
        <img src="../../../public/images/find/a3c23168112.jpg">
        <img src="../../../public/images/find/a3c23168112.jpg">
        <img src="../../../public/images/find/a3c23168112.jpg">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      hasWz:false
    }
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
    font-size: .977099rem;
    color:#36d;
    margin-bottom: .610687rem;
    margin-left: .610687rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .has_wz .pics {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
  }
  .has_wz .pics img{
    width:7.328244rem;
    margin-bottom: .610687rem;
    border:.061069rem solid #eee;
    border-radius: .610687rem;
    margin-right: .610687rem;
  }
</style>
