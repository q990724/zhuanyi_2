<template>
    <div class="reg-container">
        <!-- 1.标题 -->
        <div>
            <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"  fixed/>
        </div>
        <!-- 2.用户名和密码密码输入框 -->
        <van-cell-group class="user">
            <van-field
                v-model="username"
                label="用户名"
                placeholder="请输入用户名"
                @change="uChange"
                :error-message=usererr
            />
            <van-field
                v-model="upwd"
                label="密码"
                type="password"
                placeholder="请输入密码"
                :error-message=upwderr
            />
        </van-cell-group>
        <!-- 3.确定按钮 -->
        <div>
            <van-button type="info" class="okBtn" @click="okBtn">注册</van-button>
        </div>
        <!-- 4.底部小图标 -->
        <ad></ad>
    </div>    
</template>
<script>
import config from "../../assets/js/config.js" 
import ad from "./moreCpt/ad"
export default {
    data() {
        return {
            username:"",
            upwd:"",
            usererr:"",
            upwderr:"",
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        okBtn(){
            if(this.username==""){
                this.usererr="用户名不能为空"
                // return 
            }else if(this.upwd==""){
                this.upwderr="密码不能为空"
                // return
            }
            if(this.username!==""){
                this.usererr=""
            }
            if(this.upwd!==""){
                this.upwderr=""
            }
            config.axios(`/user/reg`,
            {
                params:{
                    uname:this.username,
                    upwd:this.upwd
                }
            }).then(res=>{
                this.$toast(res.data.msg)
                this.$router.push("/");
            })
        },
        uChange(){

        }
    },
    components:{
        "ad":ad
    }
}
</script>
<style scoped>
    .user{
        margin-top: 2.748092rem;
    }
    .okBtn{
        width:95%;
        border-radius: 1.416031rem;
        margin: 1.221374rem 2.5%;
    }
</style>
