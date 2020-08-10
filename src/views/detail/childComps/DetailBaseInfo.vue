<template>
    <div v-if="Object.keys(goods).length !== 0 ">
        <div class="title">{{goods.title}}</div>
        <div class="price-style">
            <span class="newprice">{{goods.newPrice}}</span>
            <span class="oldprice">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="bottom">
            <span class="sales-volume">{{goods.columns[0]}}</span>
            <span class="collection">{{goods.columns[1]}}</span>
            <span class="delivery-time">{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div  class="icon">
            <span v-for="index in goods.services.length-1" :key="index">
                <img class="icon-img" :src="goods.services[index-1].icon" alt="">
                <span class="icon-name">{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props:{
      goods:{
          type:Object,
          default(){
              return{}
          }
      }
  },
}

</script>
<style scoped>
.title{
    color: black;
    margin-top: 10px;
    font-size: 15px;
    padding: 0 5px;
}
.price-style{
    margin-top: 8px;
}
.newprice{
    color: red;
    font-size: 20px;
    margin-left: 5px;
}
.oldprice{
    color: gray;
    font-size: 10px;
    text-decoration: line-through;
    margin-left: 5px;
}
.discount{
    display: inline-block;
    height: 15px;
    width: 35px;
    line-height: 15px;
    text-align: center;
    border-radius: 6px;
    color:white;
    font-size: 10px;
    background:#ef727c;
}
.bottom{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    border-bottom: 1px solid #f3f3f3;
}
.sales-volume {
    margin-left: 3px;
    font-size: 10px;
    color: #a5a1a2;
} 
.collection{
    font-size: 10px;
    color: #a5a1a2;
}
.delivery-time{
    font-size: 10px;
    margin-right: 3px;
    color: #a5a1a2;
}
.icon{
    display: flex;
    justify-content: space-between;
    margin: 9px 7px;
}
.icon-img{
    width: 10px;
    height: 10px;
    margin-bottom: -1px;
}
.icon-name{
    font-size: 11px;
    color: black;
}
</style>