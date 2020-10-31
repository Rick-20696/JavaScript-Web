"use strict";
//Eu posso ter a função como um tipo também assim como no JS, ainda, posso definir tipos de params e retono!
//O tipo função tem a sintaxe parecida de arrow function: (paramsTypes) => return
function plusB(numA, numB) {
    return numA + numB;
}
let typeFunction = plus;
console.log(typeFunction(10, 20));
