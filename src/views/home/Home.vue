<template>
  <div id="home" >
    <nab-bar class="home-nav"><div slot="center">购物街</div></nab-bar>
    <tab-control class="tab-control" :titles = "['流行','新款','精选']"
      @tabClick = 'tabClick' ref="tabControl1"  v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type = '3' @scroll="contentclick" :pull-up-load = 'true' @pullingUp ='loadMore'>
      <home-swiper :banners="banners" @imageSwiperLoad.once = 'imageSwiperLoad'></home-swiper>
      <recommend-view :recommends = 'recommends'></recommend-view>
      <featrue-view></featrue-view>
      <tab-control :titles = "['流行','新款','精选']"
      @tabClick = 'tabClick' ref="tabControl" v-show="!isTabFixed"></tab-control>
      <goods-list :goods = "goods[currentType].list" ></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatrueView from './childComps/FeatrueView'

import Scroll from '@//components/common/scroll/Scroll'
import NabBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/tabControl'
import GoodsList from '@/components/content/goods/goodsList'
import BackTop from '@/components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from '@/network/home'
  export default {
    name: "Home",
    components:{
      NabBar,
      HomeSwiper,
      RecommendView,
      FeatrueView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isshow:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
      }
    },
    activated() {
      this.$refs.scroll.backTop(0,this.saveY,1000)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY =this.$refs.scroll.scroll.y
      console.log(this.saveY);
      
    },
    created() {
      //请求多个数据
      this.getHomeMultiData()

      //求个对应分页的数据
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
   
    },
    mounted() {
      //监听item的图片加载完成
      const refresh = this.debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },
    methods: {
      //事件监听相关
      debounce(func,delay){
        let timer = null
        return function(...args){
          if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          }, delay);
        }
      },

      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      topClick(){
        this.$refs.scroll.backTop(0,0)
      },
      contentclick(position){
        // 判断回到顶部的图片是否显示
        this.isshow = (-position.y) >1000
        //判断导航是否吸附在顶部
         this.isTabFixed = (-position.y) > 560
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      imageSwiperLoad(){
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

          //网络请求相关
              
      getHomeMultiData(){
        getHomeMultidata().then( res =>{
          this.banners = res.data.banner.list,
          this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page +1
         getHomeGoods(type,page).then(res =>{
           this.goods[type].list.push(...res.data.list)
           this.goods[type].page = this.goods[type].page+1 
           
            //完成下拉加载更多
           this.$refs.scroll.finishPullUp()
      })
      }
    },
  }
</script>

<style scoped>
  #home{
    height: 100vh;
  } 
  .home-nav{
    background: var(--color-tint);
    font-size: 18px;
    color: white;
  }
  .tab-control{
    position: relative; 
    background: white;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .content{
    height: calc(100% - 50px);
    overflow: hidden;
  }
</style>
