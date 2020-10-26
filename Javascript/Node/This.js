/**
 * Algumas curiosidades do this aqui no node.
 * 
 * Escrever um código fora de qualquer escopo visível, você está no this do noe, ou seja, module.exports/exports.
 * Escrever no escopo de uma função por exemplo, já estaria no Global. Vale a pena tomar cuidado com isso 
 */
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Function, this === module/module.exports ->', this === module.exports);
    console.log('Function, this === module/module.exports ->', this === exports);
    console.log('Function, this === global ->', this === global);
}

logThis()