const path = require('path')

const name = '{{name}}'

const url = process.env.PROXY_URL
const base = process.env.VUE_APP_BASE_API

const port = process.env.PORT || 3333 // 端口

// https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  publicPath: base,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,

  devServer: {
    host: 'localhost',
    port: port,
    open: false,
    proxy: {
      [base]: {
        target: url,
        changeOrigin: true,
        pathRewrite: {
          ['^' + base]: '',
        },
      },
    },
    disableHostCheck: true,
  },

  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
        },
      })
    })
  },
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
