<template>
   
   <div>
      <footer>
         <van-tabbar v-model="active">
            <van-tabbar-item info="3">
               <span>自定义</span>
               <img
                  slot="icon"
                  slot-scope="props"
                  :src="props.active ? icon.active : icon.inactive"
               >
            </van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
         </van-tabbar>
      </footer>
   </div>

   
</template>

<script>
export default {

}
</script>

<style>

</style>
