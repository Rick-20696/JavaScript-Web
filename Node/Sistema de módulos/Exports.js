//Algumas considerações sobre o exports:

//This é sempre, por padrão, o objeto que eu estou exportando
console.log(module.exports === this);

//As duas maneiras exportam o mesmo default object. 
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3

//Exports e Module.exports apontam para o mesmo objeto, mas Exports tem algumas exceções...
console.log(exports, module.exports);

//A reatribuição para exportação, através do Exports, não funciona...
exports = null;
console.log(exports, module.exports);

exports = {name: 'test'}
console.log(exports, module.exports);

//Exports é apenas uma outra variável que tem o endereço do módulo. Já module.exports faz alterações
module.exports = {name: 'test2'}