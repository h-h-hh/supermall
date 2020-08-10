<template>
<div class="shop">
    <div class="trademark">
        <img :src="shop.logo">
        <span>{{shop.name}}</span>
    </div>   
    <div class="shop-describe">
        <div class="sales-volume">
            <p class="sales-nums">{{shop.sells | sellFilters}}</p>
            <p class="sales">总销量</p>
        </div>
        <div class="baby">
            <p class="baby-nums">{{shop.goodsCount}}</p>
            <p class="baby-name">全部宝贝</p>
        </div>
        <div class="line"></div>
        <div class="evaluates">
            <div class="evaluate" v-for="(item,index) in shop.score" :key="index">
                <div class="pingjia"> 
                    <span class="span1">{{item.name}}</span>
                    <span class="span2">{{item.score}}</span>
                    <span class="green" :class="{active:item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
                </div>
            </div>
           
        </div>
    </div>
    <div class="seesee">进店逛逛</div>
</div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  data() {
      return {
      }
  },
  props:{
      shop:{
          type:Object,
          default(){
              return{}
          }
      }
  },
  filters:{
      sellFilters : function(val){
          return   (val/10000).toFixed(1) + '万'
      }
  }
  
}

</script>
<style scoped>
.shop{
    margin-top: 12px;
    border-top: 5px solid #f3f3f3;
}
.shop-describe{
    display: flex;
    justify-content: space-between;
}
.trademark {
    margin-top: 20px;
    margin-left: 8px;
}
.trademark img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #f3f3f3;
    margin-bottom: -15px;
}
.trademark span{
    margin-left: 8px;
    font-size: 15px;
    color:black
}
.sales-volume{
    margin-top: 28px;
    margin-left: 28px;
}
.sales-nums{
    color: black;
}
.sales{
    margin-top: 5px;
    font-size: 10px;
    color: black;
}
.line{
    height: 30px;
    margin-top: 35px;
    margin-left: px;
    border-left: 1px solid red;
}
.baby{
    margin-top: 28px;
    margin-left: 15px;
}
.baby-nums{
    color: black;
}
.baby-name{
    margin-top: 5px;
    margin-left: -10px;
    font-size: 10px;
    color: black;
}
.evaluates{
    margin-top: 18px;
    /* margin-right: 28px; */
}
.evaluate{
    font-size: 12px;
}
.pingjia{
    margin-top: 5px;
}
.span2{
    margin-left: 10px;
}
.green{
    background: green;
    color: white;
    float: right;
    margin-left: 10px;
    margin-right: 10px;
}
.active{
    background: red;
}
.seesee{
    background: #f3f4fb;
    width: 125px;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    margin: 15px auto;
}
</style>