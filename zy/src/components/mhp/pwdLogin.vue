<template> 
    <div class="pwdLogin-container">
        <!-- 1.标题 -->
        <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" class="login-title" />
        <!-- 2.标题下面的说明 -->
        <div class="constructor">
            <p>专医账号可直接登录</p>
        </div>
        <!-- 3.用户名和密码框 -->
        <van-cell-group>
            <van-field
                v-model="username"
                clearable
                left-icon="contact"
                placeholder="邮箱、手机号或用户名"
                @click-right-icon="$toast('question')"
            />        
            <van-field
                v-model="password"
                type="password"
                left-icon="contact"
                placeholder="密码"
            />
            <van-icon class="iconfont" class-prefix='icon' name='wang_light' />
        </van-cell-group>
        <!-- 4.登录按钮 -->
        <!-- 5.版权说明 -->
        <!-- 6.底部可关闭的广告 -->
        <ad></ad>
    </div>
</template>
<script>
import ad from "./moreCpt/ad"
export default{
    data() {
        return {
            username:"",
            password:"",
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
            // Toast('提示内容');
        },
    },
    components:{
        "ad":ad,
    }
}
</script>
<style scoped>
    .constructor{
        padding:.610687rem 1.221374rem;
        color: #83889a;
        font-size: .854962rem;
    }

</style>