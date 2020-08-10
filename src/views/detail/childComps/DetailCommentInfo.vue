<template>
    <div v-if="Object.keys(comment).length !== 0" class="whole">
        <div class="top">
            <span class="people">用户评价</span>
            <span class="more">更多</span>
        </div>
        <div>
            <div class="comment-top">
                <img class="user-img" :src="comment.user.avatar">
                <span class="uname">{{comment.user.uname}}</span>
            </div>
            <div class="comment-content">
                {{comment.content}}
            </div>
            <span class="time">{{comment.created | showData}}</span>
            <span class="style">{{comment.style}}</span>
            <div class="user-images">
                <div v-for="item in comment.images" :key="item">
                    <img class="user-image" :src="item">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {formatDate} from '@/common/utils'
export default {
  name: "DetailCommentInfo",
  props:{
      comment:{
          type:Object,
          default(){
              return{}
          }
      }
  },
  filters: {
      showData: function(value){
        let date = new Date(value * 1000);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }
  },
}
</script>
<style scoped>
.top{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ebebeb;
}
.people{
    color: black;
    font-size: 15px;
}
.more{
    color: black;
    font-size: 13px;
    float: right;
}
.user-img{
    width: 45px;
    height: 45px;
    border-radius:45px;
    margin-bottom: -18px;
}
.comment-top{
    margin-top: 7px;
    margin-left: 10px;
}
.uname{
    font-size: 13px;
    color: black;
    margin-left: 8px;
}
.comment-content{
    font-size: 12px;
    margin-top: 25px;
}
.time{
    color: #b4b4b4;
    margin-left: 14px;
    font-size: 12px;
}
.style{
    font-size: 12px;
    margin-left: 8px;
    color: #b4b4b4;
}
.user-images{
    display: flex;
}
.user-images :first-child{
    margin-left: 6px;
}
.user-image{
    width: 50px;
    height: 50px;
}
.whole{
    padding-bottom: 15px;
    margin: 0 12px 15px 12px;
    border-bottom: 2px solid #ebebeb;
}
</style>