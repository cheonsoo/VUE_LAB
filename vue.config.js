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
    devtool: "cheap-eval-source-map",
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
    hot: true,
    overlay: false,
    before: (app, server, compiler) => {
      app.get("/api/item/:id", (req, res) => {
        const id = req.params.id;
        console.log(`### id: ${id}`);
        const item = {
          id,
          name: "닌텐도 스위치 네온",
          desc: "닌텐도 스위치 네온. 빨리 사주세요. 현기증 난단 말이에요~",
          quantity: 123,
          img:
            "http://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/6bfb/1a6c0738f36c313ef851aaf90e6f573f233c68734afd3b0d5c0d9bdf9d5d.jpg"
        };
        res.json(item);
      });

      app.get("/api/items", (req, res) => {
        let arr = [];
        for (let i = 0; i < 30; i++) {
          const id = Math.round(Math.random() * 100000);
          arr.push({
            id: id,
            name: `name-${id}`,
            desc: "닌텐도 스위치 네온. 빨리 사주세요. 현기증 난단 말이에요~",
            img:
              "http://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/6bfb/1a6c0738f36c313ef851aaf90e6f573f233c68734afd3b0d5c0d9bdf9d5d.jpg"
          });
        }
        res.json(arr);
      });
    }
  }
};
