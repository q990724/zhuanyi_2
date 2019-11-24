<template>
    <div class="login-container">
        <!-- 1.标题 -->
        <van-nav-bar title="快速登录/注册" left-arrow @click-left="onClickLeft" />
        <!-- 2.手机号输入框 -->
        <van-cell-group>
            <van-field class="phone-input"
                v-model="username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />
            <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            />
        </van-cell-group>
        <!-- <van-row class="phone-input">
            <van-col span="4">
                <img src="../../../public/images/me/login/icon-user.png" alt="">
                <span>+86</span>
                <van-icon name="arrow-down" />
            </van-col>
            <van-col span="10" offset="4">
                <input type="text" placeholder="用于接收预约成功短信，请谨慎填写">
            </van-col>
        </van-row> -->
        <!-- 3.验证码输入框 -->
        <!-- <van-row>
            <van-col span="4">
                <img src="../../../public/images/me/login/icon-captcha.png" alt="">
                <input type="text" placeholder="验证码">
            </van-col>
            <van-col span="10" offset="4">
                <van-button type="info">发送验证码</van-button>
            </van-col>
        </van-row> -->
        <!-- 4.确定按钮 -->
        <!-- <van-button type="info">确定</van-button> -->
        <!-- 5.密码登录链接 -->

        <!-- 6.版权信息 -->
        <!-- 7.底部小图标 -->
        <!-- 8.底部可关闭的广告 -->
    </div>
</template>
<script>
export default{
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
    .phone-input{
        height:3.053435rem;
        background: #fff;
        margin-top: 1.832061rem;
    }
</style>