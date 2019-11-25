<template>
    <div class="me-container">
        <!-- 1.标题 -->
        <van-nav-bar class="me-title" title="我" left-arrow @click-left="onClickLeft" />
        <!-- 2.用户信息 -->
        <div class="user-info">
            <!-- 2.1标题 -->
            <van-row>
                <van-col class="set" offset="22" span="12">
                    <img class="set-img" src="../../../public/images/me/me/icon-set.png" alt="">
                </van-col>
            </van-row>
            <van-row class="" type="flex" justify="center">
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
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
    }
</style>
