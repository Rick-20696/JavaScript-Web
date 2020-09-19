//Hoisting em JS é quando uma var é usada antes da sua declaração. Geralmente da erro, mas o JS joga pra cima uma declaração

console.log("Value of a: ", a);
var a = 2;
console.log("Value of a: ", a);

//Por baixo acontece isso
var a;
console.log("Value of a: ", a);
a = 2;
console.log("Value of a: ", a);

//Let não tem hoisting

console.log("Value of b: ", b);
let b = 2;
console.log("Value of b: ", b);
