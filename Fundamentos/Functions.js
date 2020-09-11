//Funções são a base do JS. Object é uma função, qualquer classe também é
//Math não é uma function, é m Object
class Product{};
console.log(typeof Object);
console.log(typeof Product);
console.log(typeof Math);

//Modos de criar a função
//Normal
function printSum1 (a, b){
    console.log(a + b);
}

//atribuindo na variável uma função anônima
const printSum2 = function (a, b){
    console.log(a + b);
}

//Se eu passa valores estranhos para as funções anteriores vai da retornos estranhos, aqui eu vou trata colocando valores default em cada parametro
const sum = function (a = 0, b = 0){
    return a + b;
}

//função arrow
const subtration = (a, b) => {
    return a - b;
} 

//retorno implícito
const mult = (a, b) => a * b;

//Função que só tem um parametro não precisa de parenteses
const print = string => console.log(string);

//Muitos problemas podem surgir na chamada da função
print("Sem erros: " + mult(2, 3));
print("NaN, como não passei o valor de 'b', este é undefined: " + mult(2));
print("Multiplos valores não influência, serão ignorados aqueles colocados amais: " + mult(2, 3, 4, 5) + "\n");

print(sum(2, 3));
print(sum(2, 3));
printSum1(2, 4);
printSum2(2, 4);
