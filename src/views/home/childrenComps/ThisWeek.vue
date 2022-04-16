<template>
  <div class="week">
    <a href="#">
      <img src="~assets/img/home/week.jpg" alt="" @load="imgLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: 'ThisWeek',
  methods: {
    imgLoad() {
      this.$emit('weekImgIsLoad')
    }
  }
}
</script>

<style lang="less" scoped>
.week {
  img {
    width: 100%;
  }
}
</style>