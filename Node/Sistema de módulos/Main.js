//Existe a importação pelo Commons.JS e também a do ES6

//A importação de módulos próprios sempre deve ser referenciada pelo './' antes do caminho. 
//Isso indica qual lugar do módulo que está importando.
const moduleA = require('./Module A');
const moduleB = require('./Module B');

console.log(moduleA.bye);
console.log(moduleA.wellcome);
console.log(moduleB.goodMorning);
console.log(moduleB.goodNight());

console.log(moduleB);
console.log(moduleA);
