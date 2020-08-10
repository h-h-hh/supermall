<template>
  <div class="car-shop">
    <nav-bar class="nav-bar">
        <div slot="center">购物车({{$store.state.carList.length}})</div>
    </nav-bar>
      <bscroll class="content">
            <div class="shop-item" v-for="(item,index) in $store.state.carList" :key="index">
                <input class="input" type="checkbox" :checked = 'item.checked' @click="inputClick(index)">
                <img class="car-img" :src="item.image">
                <span class="title">{{item.title}}</span>
                <span class="desc">{{item.desc}}</span>
                <span class="price">￥{{item.price}}</span>
                <span class="count">x{{item.count}}</span>
            </div>
      </bscroll>
      <div class="prices">
        <input type="checkbox" @click="allClick" ref="checked" checked>
        <span class="meny">全选</span>
        <span class="quanbu">合计:{{totalPrice}}</span>
        <span class="buy">去结算</span>
      </div>
  </div>
</template>


<script>
import Bscroll from '@/components/common/scroll/Scroll'
import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: "Cart",
    data() {
      return {
        flag:true
      }
    },
    components:{
      NavBar,
      Bscroll
    },
    methods: {
      inputClick(index){
        // this.$store.state.carList.checked = !this.$store.state.carList.checked 
        // console.log(this.$store.state.carList[index].checked);
        this.$store.state.carList[index].checked = !this.$store.state.carList[index].checked
        // console.log(this.$store.state.carList[index].checked);
        for(let i =0 ;i <this.$store.state.carList.length;i++){
            if (this.$store.state.carList[i].checked === false) {
              this.$refs.checked.checked = false
              break
            } else{
               this.$refs.checked.checked = true
            }
         }
      },
    allClick(e){
        // console.log(this.ischecked);
        // if (e.target.checked == true) {
        //   console.log('111');
          
        // } else {
        //   console.log('222');
          
        // }
        // console.log( this.$store.state.carList.length);
          for(let i =0 ;i <this.$store.state.carList.length;i++){
            if (e.target.checked == true) {
              this.$store.state.carList[i].checked = this.flag
            } else {
              this.$store.state.carList[i].checked = !this.flag
           }
         }
      }
    },
    computed: {
      totalPrice(){
      //   let sumprice = 0
        
      //   for(let i = 0;i<this.$store.state.carList.length;i++){
      //     if (this.$store.carList[i].checked ===ture) {
      //        sumprice +=this.$store.state.carList[i].price
      //     }
      //     return sumprice
      //   }
      return this.$store.state.carList.filter(item =>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
      }
    },
  }
</script>

<style scoped>
.car-shop{
  width: 100%;
  height: 100vh;
}
.nav-bar{
  background: #ff8e96;
  color: white;
  font-weight: 600;
}
.shop-item{
  height: 100px;
  border-bottom: 1.5px solid #dcdcdc;
  position: relative;
}
.content{
  overflow: hidden;
  height: calc(100% - 125px)
}

.input{
  position: absolute;
  top: 46px;
  left: 2px;
}
.car-img{
  width: 45px;
  height: 80px;
  position: absolute;
  top: 10px;
  left: 17px;
  border-radius: 5px;
}
.title{
  display: inline-block;
  width: 260px;
  font-size: 14px;
  color: black;
  margin-top: 5px;
  margin-left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc{
   display: inline-block;
   width: 260px;
   margin-top: 7px;
   margin-left: 70px;
   font-size: 12px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}
.price{
  display: inline-block;
  margin-top: 25px;
  margin-left: 68px;
  font-size: 13px;
  color: orange;
}
.count{
  float: right;
  margin-top: 20px;
  margin-right: 8px;
  font-size: 14px;
  color: black;
}
.prices{
  height: 30px;
  background: #e6e6e6;
  position: relative;
  bottom: -1px;
  z-index: 9;
  line-height: 30px;
}
.prices input{
  margin-top: 8px;
  margin-left: 3px;
}
.meny{
  font-size: 13px;
  margin-left: 5px;
}
.quanbu{
  font-size: 13px;
  margin-left: 15px;
}
.buy{
  font-size: 15px;
  color: white;
  display: block;
  width: 80px;
  float: right;
  text-align: center;
  background: #ff5200;
}
</style>
