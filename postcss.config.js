module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // 视口的宽度
      viewportWidth: 375,
      // 视口的高度
      viewportHeight: 667,
      // 指定转换单位的小数位数
      unitPrecision: 5,
      // 需要转换的单位
      viewportUnit: 'vw',
      // 小于或等于1px不进行转换
      minPixelValue: 1,
      // 是否允许在媒体查询之中转换px
      mediaQuery: false
    }
  }
}