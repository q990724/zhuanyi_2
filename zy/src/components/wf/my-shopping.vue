<template>
  <div class = "shopping">
    <div>
      <van-row class="navigation-bar">
        <van-col span="2">
          <span class="shopping-menu">
            <img src="../../../public/images/shopping/bu99c-lmzdu.png" alt="">
          </span>
        </van-col>
        <van-col span="15" class = "shopping-search">
          <router-link to = "">
            <span>
              <img src="../../../public/images/shopping/fdj.png" alt="">
              <span>搜索你想找的商品</span>
            </span>
          </router-link>
        </van-col>
        <van-col span="4" class = "commodity-order">
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
    </div>
    <div>
      <van-row class="location">
        <van-col span="12" class = "location-pos">
          <span>
            <img src="../../../public/images/shopping/bnqkm-kja60.png" alt="">
            <span>未开启定位</span>
          </span>
        </van-col>
        <van-col span="12" class="location-text">
          <span>添加地址</span>
          <i></i>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item>
          <img src="../../../public/images/shopping/Gla162346464.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../public/images/shopping/umc171339897.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../public/images/shopping/0E0171338041.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../../public/images/shopping/zc8148801669.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-row>
        <van-col span="24" class="shopping-nav">
          <router-link to = "">
            <img src="../../../public/images/shopping/N3O142356026.png" alt="" >
          </router-link >
        </van-col>
      </van-row>
    </div>
    <div class="c1">
      <div>
        <van-row  >
          <van-col span="24" class="classification">
            <router-link to = "">
              <img src="../../../public/images/shopping/0mE163714225.gif" alt="">
            </router-link >
          </van-col>
        </van-row> 
      </div>
    </div>
    <div class="notice">
      <van-row>
        <van-col span="24" class="shopping-img">
          <span>
            <img src="../../../public/images/shopping/0dz165632686.png" alt="" >  
          </span>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      static:"",
      x:0
    }
  },
  methods:{
    slide(){

    }
  }
}
</script>

<style scoped>
  .navigation-bar{
    display: flex;
    padding: .4125rem 1.03125rem;
    top: 0;
    left: 0;
    background: #fff;
    align-items: center;
  }
  
  .shopping-search a{
    background: #e0e1e6;
    height: 2.2rem;
    /* line-height: 1.9; */
    align-items: center;
    margin: 0 1.03125rem;
    display: flex;
    border-radius: 1rem;
    padding-left: .9625rem;
  }
  .shopping-search a>span>img{
    width: 1.5625rem;
    height: 1.5625rem;
  }
  .shopping-search a>span>span{
    color: #9d9ea7;
    font-size: .9625rem;
    padding-left: .6875rem;
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
  .location{
    background:#fff;
    padding:.552rem;
    font-size:.828rem;
  }
  .location-pos>span>span{
    display:inline-block;
    padding-left: .3125rem;
  }
  .location-text{
    text-align:right;
    position:relative;
  }
  .location-text>span{
    padding-right:.975rem;
  }
  .location-text>i{
    display:block;
    width: 0;
    height: 0;
    border-top: .1875rem solid transparent;
    border-left: .3125rem solid #000;
    border-bottom: .1875rem solid transparent;
    position:absolute;
    top:35%;
    right:.1875rem;
  }
  .van-swipe-item img{
    width:100%;
  }
  .shopping-nav>a>img{
    width:100%;
  }
  .c1{
    height:13.125rem; 
  }
  .classification{
    overflow-X: auto;
    width:100%;
    padding-bottom:1rem;
  }
  .classification a>img{
    width:140%;
  }
  .shopping-img{
    background:#fff;
    width:100%;
    
  }
  .shopping-img>span>img{
    width:100%;
  }
  .shopping-img{
    position:relative;
    top:-1.25rem;
  }
</style>
