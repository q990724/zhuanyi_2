<template>
  <div id="wz">
    <!-- 组件 头部导航 -->
    <van-nav-bar
      title="我的问诊"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 组件 标签页 -->
    <van-tabs v-model="activeName" color="#3F86FF">
      <van-tab title="全部" name="a">
        <nowz></nowz>
      </van-tab>
      <van-tab title="图文" name="b">
        <nowz></nowz>
      </van-tab>
      <van-tab title="电话" name="c">
        <nowz></nowz>
      </van-tab>
      <van-tab title="视频" name="d">
        <nowz></nowz>
      </van-tab>
      <van-tab title="免费" name="e">
        <nowz></nowz>
      </van-tab>
      <van-tab title="远程门诊" name="f">
        <nowz></nowz>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import nowz from './nowz'
export default {
  methods:{
     onClickLeft(){},
     onClickRight(){},
  },
  data(){
    return {
      activeName:"a"//标签页对应默认页面
    }
  },
  components:{
    "nowz":nowz,
  }

}
</script>
<style scoped>
  .van-nav-bar .van-icon{
    color: #000;
    font-size:1rem;
  }
</style>
