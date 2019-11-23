<!--
 * @Author: your name
 * @Date: 2019-11-24 00:26:53
 * @LastEditTime: 2019-11-24 01:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\components\wtq\jkh.vue
 -->
<template>
  <div id="jkh">
    <div class="top-search">
      <!-- 上方搜索框 -->
      <van-row gutter="1"> 
        <van-col span="22">
          <!-- 搜索框 -->
          <form action="/">
            <van-search v-model="value" placeholder="搜索医生、疾病科普等内容" shape="round" @search="onSearch" @cancel="onCancel" background="linear-gradient(180deg,#3f86ff,#589bff)"/>
          </form>
        </van-col>
        <van-col span="1">
          <!-- 头像 -->
          <van-image round  width="10rem"  height="10rem"  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
      </van-row>
    </div>
    

    <!-- 第二排 -->
    <div class="docs">
      <van-row>
        <!-- 24 : 2 10 10 2 -->
        <van-col offset="2" span="10">
          <!-- 左边 -->
          <div class="doc-left">
            <img class="p1" src="../../../public/images/jkh/top-entry-health.png">
            <div class="txt">
              <h4>找号主 <img style="width:16px;" src="../../../public/images/jkh/right.png"></h4>
              <p>看科普 找大咖</p>
            </div>
          </div>
        
        </van-col>
        <van-col span="10">
          <!-- 右边 -->
          <div class="doc-right">
            <img class="p1" src="../../../public/images/jkh/top-entry-help.png">
            <div class="txt">
              <h4>一病多问<img style="width:16px;" src="../../../public/images/jkh/right.png"></h4>
              <p>5位以上专家把关</p>
            </div>
          </div>
        </van-col>
      </van-row>

    </div>


    <!-- 第三排 -->
    <div class="kind">
      <!-- 第一排类型 -->
      <van-row gutter="2">
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
      </van-row>
      <!-- 第二排类型 -->
      <van-row gutter="2">
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
        <van-col span="6">
          <div class="item">
            <div class="img">
              <img src="../../../public/images/jkh/1.png">
            </div>
            <p class="item-info">就医互助</p>
          </div>
        </van-col>
      </van-row>
    </div>

    <!-- 第四排 -->
    <div class="shishi">
      
    </div>


<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
    <van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>

<van-row>
  <van-col span="4">span: 4</van-col>
  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
</van-row>

<van-row>
  <van-col offset="12" span="12">offset: 12, span: 12</van-col>
</van-row>

<van-row gutter="20">
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 上方搜索一排 */
  .top-search{
    height:2.687023rem;
    background:linear-gradient(180deg,#3f86ff,#589bff);
    
  }
  .van-search{
    height:2.687023rem;
  }
  /* .van-search__content{
    background:rgba(40,53,76,.1);
    color:#fff;

  } */
  /* .van-field__control{
    color:#fff;
  } */
  .van-image{
    width:1.832061rem !important;
    height:1.832061rem !important;
    
  }

  .van-image[data-v-4262c00c]{
    margin-top:.3rem;
  }
  .van-col{
    line-height:2.687023rem;
  }
/* 第二排 */
  .docs{
    background:linear-gradient(180deg,#3f86ff,#589bff);
    height:3.5rem;
  }
  /* 医生 */
  .doc-left,.doc-right{
    background:#fff;
    height:4.274809rem;
    display:flex;
    box-shadow:0 .244275rem .48855rem 0 rgba(40,53,76,.05);
    margin-top:.7rem;
  }
  .doc-left{
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }
  .doc-right{
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
  .p1{
    width:3.664122rem;
    height:4.763359rem;
    margin-top:-0.5rem;
  }
  .txt{
    height:4.274809rem;
    line-height:2.2rem;
  }
  .txt p{
    color:#a6a8b6;
    font-size:.732824rem;
  }
/* 第三排 */
.item{
    width:2.931298rem;
    margin:1.2rem 1.5rem 0 1.5rem;
  }
  .img img{
    width:100%;
  }
  .item-info{
    width:4rem;
    color:#83889a;
    font-size:.732824rem;
  }
  .van-col[data-v-4262c00c]{
    line-height:0 !important;
  }
  .item-info[data-v-4262c00c]{
    margin-top:.5rem;
  }
</style>