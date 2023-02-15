const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    // 自动混入less样式
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      patterns: [path.join(__dirname, './src/assets/styles/variables.less'), path.join(__dirname, './src/assets/styles/mixins.less')]
    }
  }
})
