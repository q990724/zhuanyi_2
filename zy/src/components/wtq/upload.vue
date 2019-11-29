<template>
<!--顶部导航条-->
  <div id="upload">
    <van-nav-bar
      title="图片问诊"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 病情描述 -->
    <div class="des">
      <p>病情信息</p>
      <div class="title">
        <h3>请描述您的病情</h3>
        <span>如何描述?</span>
      </div>
      <textarea placeholder="为了更好获得医生帮助,请尽可能详细描述病情" id="text" cols="30" required rows="10" v-model="texts"></textarea>
      <div class="upload-img">
        <van-uploader
          id="up-area"
          v-model="fileList"
          multiple
          :max-count="9"
          :before-read="beforeRead" 
          :after-read="afterRead"
        />
      </div>
      <van-button id="button" type="primary" size="large" @click="uploadImages">上传图片</van-button>
    </div> 
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from 'vant';
export default {
  data(){
    return {
      fileList:[],
      texts:"",
      base:[],
    }
  },
  methods: {
    onClickLeft(){
      this.back(this)
    },
    beforeRead(file) {
      console.log(file);
      for(var item of file){
        if(item.type !== 'image/png'){
           Toast('请上传 png 格式图片');
            return false;
        }
      }   
      return true;
    },
     afterRead(file) {
       console.log(file);
       for(var item of file){
         this.base.push(item.content)
       }
       
    },
    uploadImages(){
      var texts = this.texts;
      var base = this.base;
      console.log(texts,base);
      // 发送异步请求
      for(var item of base){
        axios.post("http://127.0.0.1:5050/user/uploadFile",`msg=${texts}&base=${item}&time=${new Date().getTime()}`,
        ).then(res=>{
          if(res.code == 1)resolve(true)
          if(res.code != 1)resolve(false)
        });
      }
    },
    
   
  },
}
</script>
<style scoped>
.des{
  padding:0.875rem 1rem 0 1rem;
}
.van-nav-bar .van-icon{
  color:#000;
}
.des p{
  color:#9d9ea7;
  font-size:.6rem;
  margin-bottom:1.5rem;
}
.title {
  display:flex;
}
.title h3{
  margin-right:.5rem;
}
.title span{
  color:#3f86ff;
  line-height:1.5rem;
}
#text{
  width:100%;
  height:12.12rem;
  line-height:1.1rem;
  border:none;
  font-size:1rem;
  color:#28354c;
  outline:none;
  margin-top:1.5rem;
}
#up-area{
  margin-top:2rem;
}
#button{
  margin-top:8.25rem;

}
.van-button--primary{
  background-color:#3f86ff;
  color:#fff;
  border:0;
  outline:0;
  border-radius:.625rem;
}
</style>
