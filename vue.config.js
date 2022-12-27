const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/cgd103/g3/" : "/",
  filenameHashing: false, //去除打包後，檔案hash名，請注意所有資料夾的圖片、名稱不能一樣
  devServer: {
    proxy: {
      "/api_server": {
        target: "http://localhost/timevolts_pika/phpfile",
        changeOrigin: true,
        pathRewrite: {
          "^/api_server": "",
        },
      },
    },
  },
});
