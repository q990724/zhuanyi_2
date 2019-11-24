<template>
   <div class="one-by-more">
      <div class="tag">
         <span>一病多问</span>
      </div>
      <div class="question">
         <van-row>
            <van-col span="3">
               <div class="logo">问</div>
            </van-col>
            <van-col span="21">
               <div class="question-title">
                  糖尿病、高血压十几年2016年查出甲状腺乳头状癌转移淋巴手术两侧全切，但一侧淋巴转移病灶手术风险大没去掉干净（图一👇）手术后医生建议碘131治疗，在上海复旦大学附属中山医院做过三次碘131治疗了！图二三👇是这两年早晨空腹优甲乐2片半，每两个月的检查结果图四👇是做第三次碘131治疗时候医生怀疑肺转移做的气管镜提取物病理报告检查图五👇是前天停优甲乐三周后的检查（我们8月16日住院做第四次同位素治疗）什么原因甲状腺球蛋白那么高
               </div>
               <div class="question-tag">
                  <span>#糖尿病</span>
                  <span>#甲状腺乳头状癌</span>
               </div>
            </van-col>
         </van-row>
      </div>
      <div class="answer">
         <van-row>
            <van-col span="3">
               <div class="logo">答</div>
            </van-col>
            <van-col span="21">
               <van-row gutter="8">
                  <van-col span="5" class="answer-pic-item">
                     <img src="../../../public/images/index/一病多问/item-1-1.png">
                     <p>副主任医师</p>
                  </van-col>
                  <van-col span="5" class="answer-pic-item">
                     <img src="../../../public/images/index/一病多问/item-1-2.png">
                     <p>副主任医师</p>
                  </van-col>
                  <van-col span="5" class="answer-pic-item">
                     <img src="../../../public/images/index/一病多问/item-1-3.png">
                     <p>主治医师</p>
                  </van-col>
                  <van-col span="9" class="answer-count">
                     <p><span>16位</span>医生作答</p>
                     <a href="javascript:;">查询详情</a>
                  </van-col>
               </van-row>
            </van-col>
         </van-row>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
   .one-by-more{
      /* margin */
      padding: 1.5rem .825rem;
      box-shadow: 0 0.256rem 0.59733333rem 0.34133333rem rgba(20,19,51,.06);
      margin: 1rem 0;
      border-radius: .625rem;
      box-sizing: border-box;
   }
   .one-by-more>.tag>span{
      border-radius: .9375rem;
      padding: .1rem .825rem;
      border: 1px solid #999;
      font-size: .9375rem;
      color: #999;
   }

   .question{
      margin-top: 1rem;
   }

   .one-by-more .logo{
      width: 1.675rem;
      height: 1.675rem;
      background: #5bd692;
      border-radius: 50%;
      text-align: center;
      line-height: 1.675rem;
      color: #fff;
      font-size: .8875rem;
   }

   .question-title{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-weight: 700;
      font-size: 1.125rem;
   }

   .question-tag{
      overflow-x: auto;
   }

   .question-tag span{
      font-size: .75rem;
      margin-right: .5rem;
      color: #3f86ff;
   }

   .one-by-more .answer .logo{
      background: #3f86ff;
   }

   .answer{
      margin-top: 1rem;
   }

   .answer .answer-pic-item {
      text-align: center;
   }

   .answer img{
      width: 3.2rem;
      height: 3.2rem;
      border-radius: .5rem;
   }

   .answer img+p{
      font-size: .775rem;
      color: #999;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }

   .answer .answer-count{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .answer .answer-count p>span{
      color: #3f86ff;
      font-weight: 600;
   }

   .answer .answer-count p{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
   }

   .answer .answer-count a{
      display: block;
      text-align: center;
      padding: .4125rem .625rem;
      background: #3f86ff;
      color: #fff;
      border-radius: 1rem;
      margin-top: .5rem;
   }
</style>
