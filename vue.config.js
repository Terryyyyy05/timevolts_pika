const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  /* chainWebpack: (config) => {
    config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("file-loader")
      .loader("file-loader")
      .tap((options) => {
        options = {
          // limit: 10000,
          name: "/assets/font/[name].[ext]",
        };
        return options;
      })
      .end();
  }, */
});
