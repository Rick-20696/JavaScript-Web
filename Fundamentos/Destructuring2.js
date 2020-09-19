//Destructuring com array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//como a estrutura é indexada eu posso pular 
var [e1, ,e2] = array;
console.log(e1, e2);

//posso pegar até de arrays bi-dimensionais
const array2 = [[1, 2, 3], [4, 5, 6]];
var [, [e1, e2]] = array2;
console.log(e1, e2);