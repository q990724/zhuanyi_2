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
      <textarea placeholder="为了更好获得医生帮助,请尽可能详细描述病情" id="text" cols="30" required rows="10"></textarea>
      <div class="upload-img">
        <van-uploader
          id="up-area"
          v-model="fileList"
          multiple
          :max-count="9"
          :before-read="beforeRead"
        />
      </div>
    </div> 
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data(){
    return {
      fileList:[]
    }
  },
  methods: {
    onClickLeft(){
      this.back(this)
    },
     beforeRead(file) {
      if (file.type !== 'png') {
        Toast('请上传png格式的图片');
        return false;
      }
      return true;
    },
  },
}
</script>
<style scoped>
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
</style>
