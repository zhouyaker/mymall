export function debounce(func, time) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout((...args) => {
      func.apply(this, args)
    }, time)
  }
}