<template>
    <div class="reg-container">
        <!-- 1.标题 -->
        <div>
            <van-nav-bar title="账号设置" left-arrow @click-left="onClickLeft"  fixed/>
        </div>
        <!-- 2.用户名密码输入框 -->
        <van-cell-group>
            <van-field class="phone-input"
                v-model="username"
                clearable
                left-icon="user-o"
                :label="code"
                right-icon="arrow-down"
                placeholder="用于接收预约成功短信，请谨慎填写"
                style="margin-bottom: 0.821374rem"
                @click-right-icon="showPopup"
            />
            <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '20%' }"
            />
            <van-action-sheet
                v-model="show"
                :actions="actions"
                cancel-text="取消"
                @select="onSelect"
                @cancel="onCancel"
            />
        </van-cell-group>
        <!-- 3.密码输入框 -->
        <van-cell-group class="captcha">
            <van-field
            v-model="captcha"
            type="password"
            left-icon="bookmark-o"       
            placeholder="验证码"
            style="width:60%"
            >
            </van-field>
            <van-button type="info" class="sedCaptcha">发送验证码</van-button>
        </van-cell-group>
        <!-- 4.确定按钮 -->
        <div>
            <van-button type="info" class="okBtn">确定</van-button>
        </div>
        <!-- 5.底部小图标 -->

    </div>    
</template>
<script>
export default {
    data() {
        return {
            username:"",
        }
    },
    showPopup(){
        this.show=true;
    },
    onClickLeft(){
        this.$router.push("/");
    },
    onCancel(){
        this.show = false;
    },
}
</script>
<style scoped>

</style>
