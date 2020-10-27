module.exports = {
    //Qual arquivo principal para executar JS ES6+
    entry: [
        '@babel/polyfill',
        './src/main.js',
    ],

    devtool: 'eval-source-map',

    //Para qual lugar e aquivo mando o código convertido
    output: {
        
        //Variável que se refere ao diretório raiz do arquivo
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/public'
    },  

    module: {
        
        //Diretrizes de comportameto do WebPack quando o usuário estiver importando novos arquivos JS
        rules: [
          {

            //Expressão regular
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          }  
        ],
    }
};