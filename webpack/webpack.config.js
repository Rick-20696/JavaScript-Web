const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css' //Nome do arquivo a ser gerado 
    })
  ],
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          // 'style-loader', //Injeta o css via DOM --- Este loader é conflitante com MiniCss, então estou usando apenas 1
          'css-loader' //interpret @import, url(), etc
        ]
      }
    ]
  }
}