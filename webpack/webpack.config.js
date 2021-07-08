const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [
          'style-loader', //Injeta o css via DOM
          'css-loader' //interpret @import, url(), etc
        ]
      }
    ]
  }
}