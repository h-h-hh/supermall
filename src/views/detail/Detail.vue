<template>
    <div id="detail">
        <detail-nav-bar class="nav" @titleClick= 'titleClicks' ref="navindex"></detail-nav-bar>
        <bscroll class="content" ref="scroll" :probe-type = '3' @scroll="commentScroll">
            <!-- <div>
                <ul>
                    <li v-for="(item,index) in $store.state.carList" :key="index">{{item}}</li>
                </ul>
            </div> -->
            <detail-swiper :top-images = 'topImages'></detail-swiper>
            <detail-base :goods = 'goods'></detail-base>
            <detail-shop-info :shop= 'shop'></detail-shop-info>
            <detail-goods-info :goods-info = 'detailInfo' @imgLoad = 'imgLoad'></detail-goods-info>
            <detail-param-info ref="canshu" :params-info = 'paramsInfo'></detail-param-info>
            <detail-comment-info ref="pingjia" :comment = 'comments'></detail-comment-info>
            <goods-list ref="tuijian" :goods = 'recommend'></goods-list>
        </bscroll>
        <detail-bootm-bar @addShopCar = 'addShopCar'></detail-bootm-bar>
        <back-top @click.native="topClick" v-show="isshow"></back-top>
        <toast :message ='message' :show = 'show'></toast>
    </div>
</template>
<script>
import GoodsList from '@/components/content/goods/goodsList'
import Bscroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import toast from '@/components/common/toast/toast'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBase from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBootmBar from './childComps/DetailBottomBar'

import {getDetail,Goods,Shop,GoodsParms,getRecommend} from '@/network/detail'
export default {
  name: "Detail",
  components:{
     DetailNavBar,
     DetailSwiper,
     DetailBase,
     DetailShopInfo,
     Bscroll,
     DetailGoodsInfo,
     DetailParamInfo,
     DetailCommentInfo,
     GoodsList,
     DetailBootmBar,
     BackTop,
     toast

  },
  data() {
      return {
          iid:null,
          topImages:null,
          goods:{}, 
          shop:{},
          detailInfo:{},
          paramsInfo:{},
          comments:{},
          recommend:[],
          navTop:[],
          positionY:0,
          isshow:false,
          message:'加入购物车成功',
          show:false
      }
  },
  created() {
      //保存传入的id
     this.iid = this.$route.params.iid
     //根据id请求对应的数据
     getDetail(this.iid).then(res=>{
      //请求对应的轮播图数据
      this.topImages = res.result.itemInfo.topImages
      //获取商品信息
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.shop = new Shop(res.result.shopInfo)
      //获取商品具体信息
      this.detailInfo = res.result.detailInfo
      //获取商品属性
      this.paramsInfo = new GoodsParms(res.result.itemParams.info,res.result.itemParams.rule)
     //获取评论信息
     if (res.result.cRate!==0) {
         this.comments = res.result.rate.list[0]
     }
     })
      getRecommend().then(res =>{
          this.recommend = res.data.list
      })
  },
  methods: {
      imgLoad(){
          this.$refs.scroll.refresh()
          //计算顶部点击滚动的距离
          this.navTop = []
          this.navTop.push(0)
          this.navTop.push(this.$refs.canshu.$el.offsetTop - 45)
          this.navTop.push(this.$refs.pingjia.$el.offsetTop - 43)
          this.navTop.push(this.$refs.tuijian.$el.offsetTop - 63)
          this.navTop.push(Number.MAX_VALUE)
          console.log(this.navTop);
      },
      titleClicks(index){
        //   console.log(index);
          this.$refs.scroll.scroll.scrollTo(0,-this.navTop[index],100)
        
      },
      topClick(){
        this.$refs.scroll.backTop(0,0)
      },
      commentScroll(position){
        //判断回到顶部的图片是否显示
        this.isshow = (-position.y) >1000
        
        const positionY = -position.y
          for (let i=0; i<this.navTop.length;i++) {
               if((positionY >=this.navTop[i] && positionY < this.navTop[i+1])){
                   this.$refs.navindex.currentIndex = i
               }
          }

        // if (positionY > this.navTop[0] && positionY <  this.navTop[1]) {
        //     this.$refs.navindex.currentIndex = 0 
        // } else if (positionY > this.navTop[1] && positionY < this.navTop[2]){
        //     this.$refs.navindex.currentIndex = 1
        // } else if(positionY > this.navTop[2] && positionY < this.navTop[3]){
        //     this.$refs.navindex.currentIndex = 2
        // } else if(positionY > this.navTop[3]){
        //     this.$refs.navindex.currentIndex = 3
        // }
      },
      addShopCar(){
        //   console.log('111');
          const product = {}
          product.image = this.topImages[0]
          product.title = this.goods.title
          product.desc = this.goods.desc
          product.price = this.goods.lowNowPrice
          product.iid = this.iid

          this.$store.commit('addCar',product)
          this.show = true
          setTimeout(() => {
              this.show = false
          }, 1500);
      }
  },
}
</script>
<style scoped>
#detail{
    height: 100vh;
    position: relative;
    z-index: 10;
}
.content{
    height: calc(100% - 90px);
    background: white;
    overflow: hidden;
}
.nav{
    background: white;
    position: relative;
    z-index: 9;
}
</style>