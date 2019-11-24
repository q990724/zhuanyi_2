<template> 
    <div class="ad-container">
        <!-- 1.底部小图标 -->
        <div class="zy-logo">
            <img src="../../../../public/images/me/login/weiyi-logo-blue.png" alt="">
        </div>
        <!-- 2.底部可关闭的广告 -->
        <div class="" v-show="ad" class="ad">
            <img src="../../../../public/images/me/login/download-default.png" alt="">
            <van-icon class="close" name="close" @click="onAd"/>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            ad:true,
            show:false, 
        }
    },
    methods: {
        onAd(){
            this.ad=false;
        },
    },
}
</script>
<style scoped>
    .zy-logo>img{
        width: 2.748092rem;
        height: 2.748092rem;
        margin: 8.21374rem 0 5% 5%;
    }
    .ad{
        position: fixed;
        bottom:0;
        width:100%;
        z-index: 50;
        display: flex;
        justify-content: flex-start;
    }
    .ad img{
        width:100%;
        height:3.969466rem;
    }
    .ad .close{
        position: relative;
        z-index: 4;
        right:97%;
        margin-top: 6%;
        color:#fff;
    }
</style>