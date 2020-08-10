<template>
    <div class="product-details" v-if="Object.keys(paramsInfo).length !== 0 ">
        <table class="t-table" border="1">
                <tr class="top-tr" v-for="(tr,index) in paramsInfo.sizes[0]" :key="index">
                  <th class="top-th" v-for="(th,index) in tr" :key="index">{{th}}</th>
                </tr>
               
        </table>
        <table class="tt-table" border="1">
            <tr class="two-tr" v-for="tr in paramsInfo.infos" :key="tr.key">
                <th class="two-th" v-for="th in tr" :key="th">{{th}}</th>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props:{
      paramsInfo:{
          type:Object,
          defualt(){
              return {}
          }
      }
  }
}
</script>
<style scoped>
.product-details{
    margin-top: 20px;
    border-top: 5px solid #f4f4f6;
}
.t-table{
    margin-top: 15px;
    border-collapse:collapse
}
.top-tr{
    font-size: 11px;
}
.top-th{
    width: 64px;
    height: 30px;
}
.tt-table{
    margin-top: -1px;
    border-collapse:collapse;
    border-top:1px solid rgba(red, green, blue, 0)
}
.two-tr{
    font-size: 11px;
    height: 30px;
}
.two-th:first-child{
    width: 63.5px;
    font-size: 11px;
}
.two-th:last-child{
    color: red;
    width: 256.5px;
}
</style>