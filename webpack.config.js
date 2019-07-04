const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: {
      main: [
         './src/index.js',
         './src/other.js'
      ]
   },

   output: {

   },

   module: {
      rules: [
         // es6 等
         {
            test: /\.jsx?/, // 支持 js 和 jsx
            include: [
              path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
            ],
            loader: 'babel-loader',
          },

         // css 
         {
            test: /\.css/,
            include: [
               path.resolve(__dirname, 'src'),
             ],
            use: ExtractTextPlugin.extract({ 
               fallback: 'style-loader',
               use: 'css-loader',
             })
         },

         // 图片处理
         {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
          },

         // 


      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'public/index.html'
      }),

      new ExtractTextPlugin('index.css'),
   ]
}