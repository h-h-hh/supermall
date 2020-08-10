<template>
<div>
    <img src="@/assets/img/common/top.png" alt="">
</div>
</template>
<script>
export default {
  name: "BackTop",
}
</script>
<style scoped>
div{
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 999;
}
div img{
  width: 40px;
  height: 40px;
}
</style>