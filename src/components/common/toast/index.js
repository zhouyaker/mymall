import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue) {
  // 创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 使用组件构造器创建组件对象
  const toast = new toastContrustor()
  // 将组件对象手动挂载到元素上
  toast.$mount(document.createElement('div'))
  // 将元素添加到body之中
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj