const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const open = require('opn');
const WebpackOnBuildPlugin = require('on-build-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const extractSass = new ExtractTextPlugin({
  filename: "public/assets/css/[name].css"
});


const plugins = isProduction ? [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  extractSass,
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  })] : [
    extractSass
  ];

const rules = [
  {
    test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: "file-loader",
    options: {
      name: "public/assets/images/[name].[ext]",
      publicPath: url => url.replace(/public/, ""),
      emit: false
    }
  },
  {
    test: /js$/,
    exclude: /(node_modules)/,
    loader: "babel-loader",
    query: { presets: ["react-app"] }
  },
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [{
        loader: "css-loader",
        options: { minimize: isProduction }
      }, {
        loader: "sass-loader"
      }, {
        loader: "postcss-loader",
        options: { plugins: [autoprefixer()] }
      }]
    })
  }
];


const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/assets/js/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: rules
  },
  plugins: plugins
};


const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: rules
  },
  plugins: plugins
};


if (!isProduction) {

  const newPlugins = [];

  serverConfig.plugins.forEach(function (item) {
    newPlugins.push(item);
  })

  newPlugins.push(new WebpackOnBuildPlugin(function (stats) {

    setTimeout(function () {
      open('http://localhost:3000');
    }, 1000);

  }))

  serverConfig.plugins = newPlugins;

}

module.exports = [browserConfig, serverConfig];
