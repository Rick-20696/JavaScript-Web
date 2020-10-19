//Entenda módulos externos como módulos de terceiros, ou seja, bibliotecas.

//No caso de módulos de terceiros eu passo apenas o nome da biblioteca porque há um padrão de pesquisa:
//Se não é um módulo interno, o node procura na pasta node_modules, se essa não existir, ele irá buscar na pasta externa
const lodash = require('lodash');

setInterval( () => console.log(lodash.random(1, 1000)), 1000)
