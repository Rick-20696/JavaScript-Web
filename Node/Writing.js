//Escrever arquivos usando node é mais fácil do que ler arquivos
const fs = require('fs');

const product = {
    name: 'Notebook',
    price: '2438',
    RAM_memory: '4GB'
}

//Eu uso o writeFile(), passando o diretório, nome do aquivo, conteúdo, e uma callback que recebe um erro caso dê
fs.writeFile(__dirname + '/File2.json', JSON.stringify(product), err => {
    if(err !== null){
        console.log('Failed-> ', err);
    }

    console.log('Success!!');
})