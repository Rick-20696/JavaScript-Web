//Eu posso importar módulos internos, externos e módulos do próprio node.
//Uma questão importante do require é que eu devo respeitar a nomenclatura do módulo devido ao funcionamento dos SOs

//Internos, o padrão é sempre arquivos .js, por isso não preciso informa a extensão no nome do arquivo
const internal = require('./Module A')

//Externos, no caso eu passo apenas o nome da bibilioteca que ele irá procurar um arquivo chamado "index.js"
const external = require('lodash');

//Node, funciona como os módulos externos. Aqui estou criando um servidor somente para demonstração
const http = require('http');
http.createServer((request, response) => {
    response.write('Hello, you are connected in server localhost on door 3333')
    response.end();
}).listen(3333)