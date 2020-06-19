module.exports = {   //配置的东西会自动和node_modules里的配置合并
  configureWebpack: {
    resolve: {
      alias: {  //别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
