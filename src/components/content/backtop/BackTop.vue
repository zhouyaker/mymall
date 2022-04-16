<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  bottom: 60px;
  right: 5px;
  img {
    width: 44px;
    height: 44px;
  }
}
</style>