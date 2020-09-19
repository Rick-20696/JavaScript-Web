//Operadores de atribuição
var a1 = 3.15;
var b1 = 10;

console.log(b1 += a1);

const [a, b, c, d, e] = [1, 2, 3, 4, 5];

console.log("A: ", a, "B: ", b, "C: ", c, "D: ", d, "E: ", e);

//Aritiméticos

console.log("\n", a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Relacionais

//Existe uma diferença na igualdade, "==" compara valores, "===" compara valor e tipagem
console.log("\n","01" == 1);
console.log("01" === 1);
console.log("01" != 1);
console.log("01" !== 1);
console.log(undefined == null);
console.log(undefined === null);

console.log("\n", a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);

//Lógicos