<template>
    <div class="bottom-bar">
        <div class="customer-service">
            <img src="@/assets/img/detail/客服.png" alt="">
            <p>客服</p>
        </div>
        <div>
            <img src="@/assets/img/detail/店铺.png" alt="">
            <p>店铺</p>
        </div>
        <div>
            <img src="@/assets/img/detail/收藏.png" alt="">
            <p>收藏</p>
        </div>
        <div class="shopcar" @click="addCar">
            加入购物车
        </div>
        <div class="buy">
            购买
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
      addCar(){
          this.$emit('addShopCar')
      }
  },
}
</script>
<style scoped>
.bottom-bar{
    height: 45px;
    width: 100%;
    background: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.bottom-bar img{
    height: 20px;
    width: 20px;
    margin: 5px 5px 1px 10px;
}
.bottom-bar p{
    font-size: 12px;
    margin-left: 9px;
}
.shopcar{
    width: 100px;
    background: yellow;
    margin-right: -18px;
    line-height: 45px;
    color: black;
    font-size: 13px;
}
.buy{
    width: 80px;
    background:pink;
    line-height: 45px;
    color: white;
    font-size: 13px;
}
</style>