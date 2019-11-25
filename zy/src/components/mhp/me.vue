<template>
    <div class="me-container">
        <!-- 1.标题 -->
        <van-nav-bar class="me-title" title="我" left-arrow @click-left="onClickLeft" />
        <!-- 2.用户信息 -->
        <div class="user-info" style="position: relative;">
            <!-- 2.1标题 -->
            <van-row>
                <van-col class="set" offset="22" span="12">
                    <img class="set-img" src="../../../public/images/me/me/icon-set.png" alt="">
                </van-col>
            </van-row>
            <van-row class="all-info" type="flex" justify="center">
                <van-col class="avator" span="6">
                    <img src="../../../public/images/me/me/q.png" alt="">
                </van-col>
                <van-col class="info" span="18">
                    <p>用户zy13800000000</p>
                    <h4>完善信息</h4>
                    <div>
                        <img src="../../../public/images/me/me/gift.gif" alt="">
                        领取Lv2福利
                    </div>
                </van-col>
            </van-row>
            <van-row class="vip-ad" type="flex" justify="center">
                <van-col span="4">
                    <img src="../../../public/images/me/me/Mr.png" alt="">
                </van-col>
                <van-col span="8">
                    <span>健康VIP会员</span>
                </van-col>
                <van-col span="10">
                    <van-swipe :autoplay="3000" style="height: 2rem; width:12.5rem" vertical :show-indicators="false">
                        <van-swipe-item>
                            <div class="van-ellipsis">每天只需0.5元/天，一年预计可省1510元</div>
                        </van-swipe-item>
                        <van-swipe-item>
                            <div class="van-ellipsis">解锁专家号源实时提醒，挂号不再难</div>
                        </van-swipe-item>
                    </van-swipe>
                </van-col>
                <van-col span="2">
                    <img src="../../../public/images/me/me/r.png" alt="">
                </van-col>
            </van-row>
        </div>
        <!-- 3.优惠券说明 -->
        <!-- 4.我的订单 -->
        <!-- 5.常用工具 -->
        <div class="tool">
            <!-- 2.1标题 -->
            <van-nav-bar class="tool-title" title="常用工具"/>
            <van-row class="tool-con" type="flex" justify="center">
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
            </van-row>
            <van-row class="tool-con" type="flex" justify="center">
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
            </van-row>
        </div>
        <!-- 6.我的社区 -->
        <van-swipe style="height: 200px;" vertical>
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
              </van-swipe>
        <!-- 7.健康档案 -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    components:{

    },
}
</script>
<style scoped>
    .me-title{
        border-bottom: .061069rem solid #eee;
    }
    .tool-title{
        border-bottom: .061069rem solid #eee;
    }
    .tool-con{
        height: 6.290076rem;
        background: #fff;
        border-bottom: .061069rem solid #eee;
    }
    .user-info{
        background: url("../../../public/images/me/me/OXn.png");
        height:11.419847rem;
    }
    .set{
        padding-top:.821374rem;
    }
    .set-img{
        width:1.526718rem;
        height:1.526718rem;
        margin-bottom: .916031rem;
    }
    .avator>img{
        margin-left: .916031rem;
        border-radius: 50%;
    }
    .all-info{
        color:#fff;
    }
    .info>p{
        font-size: 1.177099rem;
    }
    .info>h4{
        font-size: .854962rem;
        font-weight: normal;
    }
    .info>div{
        width: 7.022901rem;
        height:1.821374rem;
        border-radius: .916031rem;
        background: rgba(0,0,0,.1);
        line-height: 1.821374rem;
        padding:0 .610687rem;
        font-size: .732824rem;
        margin-top: .610687rem;
    }
    .info>div>img{
        width: 1.238168rem;
        height:1.238168rem;
        border-radius: 50%;
        padding-bottom: .105344rem;
    }
    .vip-ad{
        background: url("../../../public/images/me/me/OLY.png") repeat-y  ;
        background-size: 95% 100%;
        width:100%;
        margin-top: 0.921374rem;
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
        left:3%;
    }
</style>
