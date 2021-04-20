const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const outputDir =
  path.resolve(__dirname, `./dist`) + "." + new Date().getTime();
console.log(`### outputDir: ${outputDir}`);

module.exports = {
  outputDir,
  transpileDependencies: ["vuetify"],
  configureWebpack: smp.wrap({
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static", // 분석결과를 파일로 저장
        reportFilename: "docs/analyzed.html", // 분설결과 파일을 저장할 경로와 파일명 지정
        defaultSizes: "parsed",
        openAnalyzer: false, // 웹팩 빌드 후 보고서파일을 자동으로 열지 여부
        generateStatsFile: true, // 웹팩 stats.json 파일 자동생성
        statsFilename: "docs/analyzed.json" // stats.json 파일명 rename
      }),
      new webpack.IgnorePlugin({
        checkResource(resource, context) {
          if (
            resource.indexOf("./locale") > -1 &&
            context.indexOf("moment") > -1
          ) {
            console.log(resource);
            console.log(context);
            return true;
          }
          return false;
        }
      })
    ],
    resolve: {
      alias: {
        moment: "moment/src/moment"
      }
    }
  }),
  devServer: {
    overlay: false
  }
};
