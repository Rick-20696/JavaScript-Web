const sum = function (a, b) {
    return a + b;
}

const sub = function (a, b) {
    return a - b;
}

//Aqui eu tenho uma função que recebe uma operação (função)
const printResult = function (a, b, operation = sum){
    console.log(operation(a, b));
}

//Eu posso não passar a função que automaticamente vai ser chamado a soma (default value) 
printResult(3, 5)

//Posso passar uma função
printResult(10, 5, sub)

//Posso passar uma função anônima. Lá na função "printResult()" eu pego os parametros dessa função e passo para a outra
printResult(20, 10, function (a, b) {return a * b})

//Posso passa uma função Arrow
printResult(30, 6, (a, b) => a / b)

//Se eu passar nomes distintos, ainda da certo
printResult(30, 6, (c, d) => c / d)

