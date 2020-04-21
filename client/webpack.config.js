const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require('path')

module.exports = {

  entry : "./src/code/main.tsx",

  resolve : {
    extensions : [ ".ts", ".tsx", ".js" ]
  },

  module : {
    rules : [
      {
        test : /\.html$/,
        use : { loader : "html-loader" }
      },
      {
        test : /\.css$/,
        use : [ "style-loader", "css-loader"]
      },
      {
        test : /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]

  },

  plugins : [
    new HtmlWebPackPlugin(
      { 
        template: resolve(__dirname, 'src', 'index.html'),
        filename: './index.html'
      })
  ],

  performance : { hints : false },
  watch : true,
  devtool : "source-map"

};
