<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: null,
      isShow: false
    }
  },
  methods: {
    show(message, time = 1500) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = null
      }, time)
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 999;
}
</style>