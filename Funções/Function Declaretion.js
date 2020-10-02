//A grande diferença entre function declaretion e *named/function expression* de baixo, é que eu consigo usar antes! 
//Isso porque as funções, criadas com *function declaretion*,  são carregadas primeiro

console.log(sum(2, 2));

//function declaretion
function sum (a, b){
    return a + b;
}

//Function expression
const sum2 = function (a, b) {
    return a + b;
}

//Named function

const sum3 = function sum3 (a, b){
    return a + b;
}