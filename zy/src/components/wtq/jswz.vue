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
      <van-tabs v-model="active">
        <van-tab title="图文问诊">内容 1</van-tab>
        <van-tab title="电话问诊">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .top-img{
    background:url('../../../public/images/index/急速问诊/bg.png') no-repeat;
    background-size:100% auto;
    width:25.282443rem;
    height:25.343511rem;
    position:relative;
  }
  .top-text p{
    font-weight:400;
    color:#83889a;
    font-size:.8rem;
    position:absolute;
    top:13rem;
    left:3rem;
  }
  .select-area{
    width:23.694656rem;
    height:17.832061rem;
    margin:auto;
    position:absolute;
    top:20.152672rem;
    left:50%;
    transform:translateX(-50%);
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
</style>