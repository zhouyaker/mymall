<template>
  <div class="subject">
    <div v-for="(item,index) in subject" :key="index" class="item">
      <a href="#">
        <img :src="item.image" alt="" @load="imgLoad">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSubject',
  data() {
    return {
      isLoadFlag: true
    }
  },
  props: {
    subject: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if (this.isLoadFlag) {
        this.$emit('SubjectImgIsLoad')
        this.isLoadFlag = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.subject {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  border-bottom: 8px solid #eee;
  .item {
    flex: 1;
    img {
      width: 80px;
      height: 80px;
      margin: 3px 0 6px;
    }
  }
}
</style>