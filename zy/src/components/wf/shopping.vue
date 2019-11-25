<template>
  <van-row class="navigation-bar">
    <van-col span="2">
      <span class="shopping-menu">
        <img src="../../../public/images/shopping/bu99c-lmzdu.png" alt="">
      </span>
    </van-col>
    <van-col span="16" class = "shopping-search">
      <router-link to = "">
        <span>
          <img src="../../../public/images/shopping/bas27-e3p3a.png" alt="">
        </span>
      </router-link>
    </van-col>
    <van-col span="3" class = "commodity-order">
      <router-link to = "">
        <span>
          <img src="../../.././public/images/shopping/batbi-8osvo.png" alt="">
        </span>
        <span>商品订单</span>
      </router-link>
    </van-col>
    <van-col span="3" class = "shopping-cart">
      <router-link to = "">
        <span>
          <img src="../../.././public/images/shopping/bt5cp-w9h3j.png" alt="">
        </span>
        <span>购物车</span>
      </router-link>
    </van-col>
</van-row>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .navigation-bar{
    display: flex;
    padding: .4125rem 1.03125rem;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    align-items: center;
  }
  .shopping-search a{
    background: #e0e1e6;
    height: 2.2rem;
    margin: 0 1.03125rem;
    display: flex;
    border-radius: 1rem;
    padding-left: .9625rem;
  }
  .commodity-order>a,.shopping-cart>a{
    position: relative;
    display: inline-flex;
    height: 2.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .commodity-order>a{
    padding-right: .55rem;
  }
  .shopping-cart>a{
    padding-left: .55rem;
  }
  .commodity-order>a span:last-child,.shopping-cart>a span:last-child{
    font-size: .55rem;
    color: #2b313d;
  }
</style>
