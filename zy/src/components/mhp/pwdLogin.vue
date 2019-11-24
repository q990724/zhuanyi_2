<template> 
    <div class="pwdLogin-container">
        <!-- 1.标题 -->
        <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" class="login-title" />
        <!-- 2.标题下面的说明 -->

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
            this.$router.go(-1)
        },
    },
}
</script>
<style scoped>
    
</style>