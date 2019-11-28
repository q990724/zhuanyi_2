<template>
  <div class = "shopping">
    <div>
      <van-row class="navigation-bar">
        <van-col span="2">
          <span class="shopping-menu">
            <img src="../../../public/images/shopping/bu99c-lmzdu.png" alt="">
          </span>
        </van-col>
        <van-col span="14" class = "shopping-search">
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
              <img src="../../../public/images/shopping/batbi-8osvo.png" alt="">
            </span>
            <span>商品订单</span>
          </router-link>
        </van-col>
        <van-col span="4" class = "shopping-cart">
          <router-link to = "">
            <span>
              <img src="../../../public/images/shopping/bt5cp-w9h3j.png" alt="">
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
    <div class = "limited">
      <div>
        <van-row class="limited-type">
          <van-col span = "5" class = "limited-text">
            <span>限时购</span>
          </van-col>
          <van-col span = "15" class = "limited-time">
            <span>本场仅剩</span>
            <div>
              <span>1</span>
              <span>2</span>
              <span class = "m">:</span>
            </div>
            <div>
              <span>1</span>
              <span>9</span>
              <span class = "m">:</span>
            </div>
            <div>
              <span>1</span>
              <span>4</span>
            </div>
          </van-col>
          <van-col span = "4">
            <router-link to="" class = "more">
              更多
              <img src="../../../public/images/shopping/jkh.png" alt="">
            </router-link>
          </van-col>
        </van-row>
        <van-row class="limited-commodity">
          <van-col span="24">
            <div class="limited-commodity-img">
              <router-link to="" v-for="(item,i) of imgList" :key="i">
                <img :src="item.sImg" alt="">
                <span>{{item.text}}</span>
                <span class="text-type">¥</span>
                <span class="text-type text-size">{{item.price}}</span>
                <p>
                  <span class="text-type-2">¥</span>
                  <span class="text-type-2">{{item.Dprice}}</span>
                  <img src="../../../public/images/shopping/fbr72668402.png" alt="" class="vip">
                </p>
              </router-link>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgList:[{
        sImg:require("../../../public/images/shopping/rln99601889.png"),
        text:"植珍艾 | 蕲艾艾灸贴",
        price:"18.8",
        Dprice:"17.86"
      },
      {
        sImg:require("../../../public/images/shopping/rln99601889.png"),
        text:"植珍艾 | 蕲艾艾灸贴",
        price:"18.8",
        Dprice:"17.86"
      },
      {
        sImg:require("../../../public/images/shopping/rln99601889.png"),
        text:"植珍艾 | 蕲艾艾灸贴",
        price:"18.8",
        Dprice:"17.86"
      },
      {
        sImg:require("../../../public/images/shopping/rln99601889.png"),
        text:"植珍艾 | 蕲艾艾灸贴",
        price:"18.8",
        Dprice:"17.86"
      }]
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
    padding-left: .5rem;
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
  .limited{
    margin: .828rem;
    padding: .966rem 0 .138rem;
    background: #f5f6f6;
    border-radius: .345rem;
    font-size: .966rem;
  }
  .limited>div{
    background: #fff;
  }
  .limited-text{
    font-size: 1.38rem;
    font-weight: bold;
    text-align: center;
  }
  .limited-type{
    align-items: center;
    background: #fff;
    height: 1.5625rem;
    line-height: 1.5625rem;
  }
  .limited-time>div{
    display: inline-block;
  }
  .limited-time>span:first-child{
    color: #ff695c;
    margin-right: .414rem;
  }
  .limited-time>div>span{
    background: #ff695c;
    color:#fff;
  }
  .m{
    background: #fff !important;
    color:#ff695c !important;
    margin: 0 .125rem; 
  }
  .limited-time>div>span{
    padding: .0625rem;
  }
  .more{
    align-items: center;
    margin: -.3rem -.3rem -.3rem -.8rem;
    padding: .3rem .3rem .3rem .8rem;
    color: #5e616b;
  }
  .more>img{
    width: 1.125rem;
    align-items: center;
  }
  .limited-commodity{
    overflow-x: auto;
    margin-bottom: -.1rem;
    padding-bottom: .1rem;
  }
  .limited-commodity>div{
    padding: .28rem .24rem 0;
  }
  .limited-commodity-img{
    width: 120%;
    padding-bottom: .3125rem; 
    display: flex;
    justify-content: space-around;
  }
  .limited-commodity-img>a{
    display: inline-block;
    width: 6.2375rem;
    margin-right: .3125rem;
  }
  .limited-commodity-img>a>img{
    width: 5.625rem;
    height: 5.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .limited-commodity-img>a>span{
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .75rem;
    white-space: nowrap;
    color:#2b313d;
  }
  .text-type{
    color: #ff695c !important;
  }
  .text-size{
    font-size: 1.125rem !important;
    font-weight: 600 !important;
  }
  .text-type-2{
    color: #6b331a;
    font-size: .24rem;
  }
  .vip{
    width: 1.875rem;
    height: .738125rem;
  }
</style>
