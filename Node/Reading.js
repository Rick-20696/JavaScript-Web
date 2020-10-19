//A leitura de arquivos é através de um módulo do próprio node
const fileSystem = require('fs');

//Síncrona -> Não é um boa estrratégia para processos pesados
//Requisições pesadas vai travar o event loop do node, que é essencial no tratamento das requisições. 
const route =  __dirname + '/File.json';
const body = fileSystem.readFileSync(route, 'utf-8');
console.log(body);

//Assíncrona -> É a melhor opção para processos pesados ou não
//No caso de requisições assíncronas eu passo uma callback que recebe um erro e o conteúdo (body2) da requisição
fileSystem.readFile(route, 'utf-8', (error, body) => {
    if(error === null){
        //A maneira de como eu quero o arquivo vai depender do que eu quero fazer, supomos que eu queira apenas o usuário e senha
        const config = JSON.parse(body);

        console.log(`User -> ${config.db.user}; password -> ${config.db.pass}`);
    }
})

//Para leitura de .JSON basta usar o require mesmo. Nesse caso ele vem instanciado como objeto
const json = require('./File.json');
console.log('Require direct -> ', json);
console.log(typeof json);


//A leitura de pastas também é simples
fileSystem.readdir(__dirname + '/node-api', (error, files) => {
    if (error === null){
        console.log('\nFiles of the directory: ');
        console.log(files);
    }else{
        console.error(error);
    }
})

//Veja que no console o, a requisição assíncrona só retorna depois. 
//Isso porque a ideia de assincronísmo consiste em continuar o que você está fazendo enquanto não vem a resposta e não aguardar a resposta parado
