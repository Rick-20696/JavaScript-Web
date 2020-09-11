//Number -> válido para valores inteiros e de ponto flutuantes, a diferenciação vai de acordo com a atribuição

//Duas maneiras de criar um Number; "Number" é uma função
let n1 = 9.0;
let n2 = Number('7.79');

console.log(typeof Number);

//Verificando o tipo da variável
console.log("N1: " + typeof n1 + " N2: " + typeof n2);
console.log("n1 é inteiro? " + Number.isInteger(n1) + "; n2 é inteiro? " + Number.isInteger(n2));

//limitando casas do float: desse jeito, faz um arredondamento pra cima
const media = (n1 + n2) / 2;
console.log("Média é: " + media.toFixed(1));

//Convertendo para String e transformando em binário
console.log(n1.toString());
console.log(n1.toString(2));

// ***Curiosidades do Number***

console.log("Divisão por 0: " + 10 / 0);
console.log("Divindo String (JS vê se é possível converter a String em Number, se sim, divide): " + "10" / 2);
console.log("Multiplicação de String não funciona : " + "Ricardo" / 2);
console.log("Impresição da soma de Floats : " + (0.1 + 0.8));
console.log("Literal só tem ponto se dentro do parenteses : " + (10).toFixed(2));
