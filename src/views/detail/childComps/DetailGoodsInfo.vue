<template>
    <div class="goodsinfo" v-if="Object.keys(goodsInfo).length !== 0 ">
        <div>
            <i class="left"></i>
            <i class="right"></i>
            <div class="left-border"></div>
            <div class="right-border"></div>
        </div>
        <div>
            <p class="desc">{{goodsInfo.desc}}</p>
            <p class="descs">{{goodsInfo.detailImage[0].key}}</p>
        </div>
        <div v-for="item in goodsInfo.detailImage[0].list" :key="item">
            <img class="item-img" :src="item" @load="imgLoad">
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props:{
      goodsInfo:{
          type:Object,
          default(){
              return []
          }
      }
  },
  data() {
      return {
          curron:0,
      }
  },
  methods: {
      imgLoad(){
          if (++this.curron === this.goodsInfo.detailImage[0].list.length) {
              this.$emit('imgLoad')
          }
      }
  },
}
</script>
<style scoped>
.goodsinfo{
    position: relative;
    border-top: 3px solid #f4f6fa;
}
.left{
    height: 4px;
    width: 4px;
    background: black;
    position: absolute;
    top: 9px;
    left: 10px;
}
.right{
    height: 4px;
    width: 4px;
    background: black;
    position: absolute;
    top: 51px;
    right: 10px;
}
.left-border{
    width: 80px;
    height: 1px;
    background: #d2d2d4;
    position: absolute;
    top: 13px;
    left: 10px;
}
.right-border{
    width: 80px;
    height: 1px;
    background: #d2d2d4;
    position: absolute;
    right: 10px;
    top: 55px;
}
.desc{
    margin-top: 25px;
    margin-left: 12px;
    font-size: 11px;
}
.descs{
    font-size: 13px;
    color: black;
    margin-top: 35px;
    margin-left: 12px;
}
.item-img{
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
</style>