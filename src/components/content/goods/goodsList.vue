<template>
<div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item = 'item' ></goods-list-item>
</div>
</template>
<script>
import GoodsListItem from './goodsListItem'
export default {
  name: "goodList",
  components:{
    GoodsListItem
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap:  wrap;
    justify-content: space-evenly;
}

</style>