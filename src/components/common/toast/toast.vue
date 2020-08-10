<template>
<div class="toast" v-show="show">
    {{message}}
</div>
</template>
<script>
export default {
  name: "toast",
  props:{
      message:{
          type:String,
          default:''
      },
      show:{
          type:Boolean,
          default:false
      }
  }
}
</script>
<style scoped>
.toast{
    width: 150px;
    height: 40px;
    background:rgba(0, 0, 0, .7);
    color: white;
    font-size: 13px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>