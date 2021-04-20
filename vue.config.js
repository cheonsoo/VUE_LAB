const path = require("path");
const webpack = require("webpack");
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const outputDir =
  path.resolve(__dirname, `./dist`) + "." + new Date().getTime();
console.log(`### outputDir: ${outputDir}`);

module.exports = {
  outputDir,
  transpileDependencies: ["vuetify"],
  configureWebpack: config => {
    config.resolve.alias.moment = "moment/src/moment";

    // config.plugins = [new webpack.IgnorePlugin()];
  },
  devServer: {
    overlay: false
  }
};
