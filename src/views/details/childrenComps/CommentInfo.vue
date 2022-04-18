<template>
  <div class="comment-info">
    <div class="info-item" v-for="(item,index) in comment" :key="index">
      <div class="info-user">
        <img :src="item.userPic" alt="">
        <span>{{item.name}}</span>
        <div class="time">{{item.time}}</div>
      </div>
      <div class="info-detail">
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentInfo',
  props: {
    comment: {
      type: Array,
      dafault() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  .info-item {
    border-bottom: 2px solid #ccc;
  }
}
.info-user {
  padding: 10px 0 5px;
  .time {
    float: right;
    font-size: 12px;
    line-height: 42px;
    margin-right: 15px;
  }
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 18px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
</style>