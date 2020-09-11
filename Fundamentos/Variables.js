/*
JS não é fortimente tipado, então posso atribuit tipos distindos à uma variável só
let -> usada em escopos restritos (funções geralmente) 
var -> usada no escopo geral
const -> constante
*/
var a = 3;
let b = 4;
const c = 5;

console.log(a)

a = "Meaw";

console.log(a)

//Posso recriar com o mesmo nome uma "var", mas não uma "let"
var a = 10;
