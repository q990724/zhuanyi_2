<template>
  <div class="chooseClass">
    <div class="title">
      <van-nav-bar title="预约挂号" left-arrow fixed/>
    </div>
    <div class="htitle">
      <van-row type="flex" justify="space-between">
        <van-col span="18" class="left">
          <h3>北京大学人民大学</h3>
          <p>
              <span>三级甲等</span>
              <span>公立医院</span>
              <span>综合医院</span>
          </p>
        </van-col>
        <van-col span="6" class="right">
            <van-tag plain round>预约规则</van-tag>
            <p><span>医院主页</span></p>
        </van-col>
      </van-row>
    </div>
    <div class="step">
      <van-steps :active="stepActive">
        <van-step>选择医院</van-step>
        <van-step>选择科室</van-step>
        <van-step>选择医生</van-step>
        <van-step>提交预约</van-step>
      </van-steps>
    </div>
    <div class="help">
        <h5>不知道选哪个科室</h5>
        <router-link to="">点我立即咨询</router-link>
    </div>
    <div class="content">
        <div class="search">
            <van-search placeholder="请输入搜索关键词" v-model="searchVal" />
        </div>
        <div class="classList">
            <van-tree-select
                :items="items"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
                height="450"
                @click-nav="leftActive"
            />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            searchVal : "",
            items : [
                {text : "精神心理科" , children : [
                    {text: '眼科',id: 1,},
                    {text: '不孕不育男科',id: 2,},
                    {text: '泌尿外科',id: 3,},
                    {text: '内分泌科门诊',id: 4,},
                    {text: '风湿免疫科门诊',id: 5,},
                    {text: '耳鼻喉科门诊',id: 6,},
                ]},
                {text : "内科" , children : [
                    {text: '风湿免疫科门诊',id: 1,},
                    {text: '内分泌科门诊',id: 2,},
                ]},
                {text : "中医科" , children : [
                    {text: '心血管外科',id: 1,},
                    {text: '泌尿外科',id: 2,},
                    {text: '乳腺外科门诊',id: 3,},
                ]},
                {text : "产科" , children : [
                    {text: '骨关节科',id: 1,},
                    {text: '脊柱外科门诊',id: 2,},
                    {text: '创伤骨科门诊',id: 3,},
                ]},
                {text : "儿科" , children : [
                    {text: '妇科门诊',id: 1,},
                    {text: '计划生育中心',id: 2,},
                ]},
                {text : "口腔颌面科" , children : [
                    {text: '不孕不育男科',id: 1,},
                ]},
                {text : "外科" , children : [
                    {text: '眼科',id: 1,},
                ]},
                {text : "男科" , children : [
                    {text: '骨关节科',id: 1,},
                    {text: '脊柱外科门诊',id: 2,},
                    {text: '创伤骨科门诊',id: 3,},
                ]},
                {text : "肿瘤及防治科" , children : [
                    {text: '骨肿瘤科',id: 1,},
                ]},
            ],
            activeId: 1,
            activeIndex: 0,
            stepActive : 1,
            className : "精神心理科"
        }
    },
    created(){
        console.log(this.$store.getters.getOrderStep);
    },
    methods : {
        leftActive(index){
            for(var i = 0;i < this.items.length;i++){
                if(i == index){
                    this.className = this.items[i].text;
                }
            }
        }
    }
};
</script>

<style scoped>
.title {
  height: 55px;
}

.htitle{
    padding: 1.821374rem .916031rem;
    background-color: #fff;
}

.htitle .left span{
    font-size: .854962rem;
    margin-right: .48855rem;
    color: #888;
}

.htitle .left span:first-child{
    color: #ff695c;
}

.htitle .right{
    text-align: right;
}

.htitle .right span{
    font-size: .854962rem;
}

.htitle .right p,.htitle .left p{
    margin-top: .48855rem;
}

.htitle .right span::after{
    content: ">";
}

.help{
    display: flex;
    justify-content: space-between;
    padding: .88855rem .916031rem;
    align-items: center;
    background-color: #fff;
    margin: .610687rem 0;
}

.help a{
    font-size: 14px;
    color: #3f86ff;
}

.help a::after{
    content: ">";
}

.van-nav-bar {
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #ddd;
}
.van-nav-bar__title {
  font-size: 1.299237rem;
  line-height: 3;
}

.van-tree-select__nav-item{
    border-bottom: 1px solid #eee;
}

</style>
