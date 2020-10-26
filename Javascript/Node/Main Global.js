//Para que o "Global.js" tenha algo no escopo global, eu necessito carregar/importar
require('./Global')

//Eu vou poder usar como eu quiser, claro que o objeto compartilhado deve ser mais protegido...
console.log(utility);
utility.value = 17
console.log(utility);