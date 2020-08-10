<template>
<div>
    <nav-bar>
        <div class="back" slot="left" @click="backClick">></div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" class="title-item" :key="index" :class="{active:currentIndex === index}"
            @click="itemClick(index)">{{item}}</div>
        </div>
    </nav-bar>
</div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  components:{
      NavBar
  },
  data() {
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
  methods: {
      itemClick(index){
          this.currentIndex=index 
        //   console.log(index);
        //   console.log(this.currentIndex);
          this.$emit('titleClick',index)
      },
      backClick(){
          this.$router.go(-1)
      }
  },
}
</script>
<style scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
    font-size: 12px;
}
.active{
    color: red;
}
.back{
    font-size: 20px;
    margin-left: -10px;
}
</style>