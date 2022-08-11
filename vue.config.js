const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //跨域配置
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_URL,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
