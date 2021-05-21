const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('views',resolve('./src/views'))
      .set('assets',resolve('./src/assets'))
    //set:第一个参数设置的别名，第二个参数设置的路径
  },
  devServer: {
    proxy: {
      "/api/v1/sync": {
        target: 'http://172.16.1.83:28500/',
        secure: false,
        changeOrigin: true,
      }
    }
  }
}