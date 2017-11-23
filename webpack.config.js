const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const DIST_DIR = path.resolve(__dirname, "dist")
const ENTRY_FILE = path.resolve(__dirname, "src/js/index.js")
const STATIC_DIR = path.resolve(__dirname, "src/static")

module.exports = {
  entry: ENTRY_FILE,
  context: DIST_DIR,
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "bundle.js",
    libraryTarget: "umd",
    library: "bundle"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: STATIC_DIR,
        to: DIST_DIR
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 5000
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
}

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map"
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
