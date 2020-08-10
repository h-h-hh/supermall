<template>
<div id="recommend" >
  <div v-for = '(item,index) in recommends' :key="index">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>

</template>
<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  },
}
</script>
<style scoped>
#recommend{
  display: flex;
  text-align: center;
  padding: 10px 0 40px 0;
  border-bottom: 10px solid #eee;
}

#recommend div img{
  width: 75%;
  height: 75%;
  margin-bottom: 8px;
}
</style>