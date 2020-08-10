<template>
<div class="tab-control">
    <div v-for="(item,index) in titles" 
    :class="{active:index === currentIndex}"
    @click="itemClick(index)"
    :key="index">
        <span>{{item}}</span>
    </div>
</div>
</template>
<script>
export default {
  name: "tabControl",
  data() {
      return {
          currentIndex:0
      }
  },
  methods: {
      itemClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>
<style scoped>
.tab-control{
    display: flex;
    text-align: center;
}
.tab-control div{
    flex: 1;
}
.tab-control div span{
    padding:5px;
}
.active{
    color:pink;
}
.active span{
    border-bottom: 2px solid var(--color-tint);
}
</style>