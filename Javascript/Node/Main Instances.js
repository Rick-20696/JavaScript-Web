//O node, por padrão, faz cache do módulo importado pelo require()
//O cache significa manter a uma única instância

//Mesmos objetos 
const insA = require('./One Instance');
const insB = require('./One Instance');

//Novo Objeto. Nesse caso, a exportação de "New Instance" retorna uma função, para invocar ela basta usa "()" depois de require()
const insC = require('./New Instance')();
const insD = require('./New Instance')();

insA.inc();
insA.inc();
insA.inc();
console.log(insB);

insC.inc();
insC.inc();
insC.inc();
console.log(insD);