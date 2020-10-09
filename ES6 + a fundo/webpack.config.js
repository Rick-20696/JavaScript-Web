module.exports = {
    //Qual arquivo principal para executar JS ES6+
    entry: './main.js',

    //Para qual lugar e aquivo mando o código convertido
    output: {
        
        //Variável que se refere ao diretório raiz do arquivo
        path: __dirname,
        filename: 'bundle.js'
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