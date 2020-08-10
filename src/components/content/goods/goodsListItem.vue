<template>
    <div class="goods-item" @click="itemClick">
        <img class="item-img" :src=" showImage" alt="" @load = 'imageLoad'>
        <div class="goods-message">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">☆{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: "goodsListItem",
  props:{
      goodsItem:{
          type:Object,
          default(){
              return []
          }
      }
  },
  methods: {
      imageLoad(){
          this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
          this.$router.push('/detail/' + this.goodsItem.iid)
      }
  },
  computed: {
      showImage(){
          return this.goodsItem.image || this.goodsItem.show.img
      }
  },
}
</script>
<style scoped>
.goods-item{
    width: 48%;
    height: 273px;
    position: relative;
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
    
}
.goods-message{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-message p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    margin-top: 5px;
}
.price{
    color: red;
    margin-right: 20px;
}
.item-img{
    height: 230px;
}
</style>