<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>
<script>
import Scroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
      probeType:{
          type:Number,
          default:0
      },
       pullUpLoad:{
           type:Boolean,
           default:false
       }
  },
  data() {
      return {
          scroll:null
      }
  },
  mounted() {
      //创建Scrool对象
      this.scroll = new Scroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
      })
      //监听滚动的距离
      this.scroll.on('scroll',(position)=>{
        // console.log(position)  
        this.$emit('scroll',position)
      })
      //上拉加载更多
      this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
      })
  },
  methods: {
      backTop(x,y,time = 500){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
          this.scroll.finishPullUp()
      },
     refresh(){
         this.scroll.refresh()
     }
  },
}
</script>
<style scoped>
</style>