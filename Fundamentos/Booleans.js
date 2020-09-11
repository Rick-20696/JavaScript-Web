//Normalmente, booleanos são True e False, porém JS aceita muitos literais como verdadeiro 
//Melhor dizendo, expressões que retornam booleans

let logado = false;
console.log(logado);

//Qualquer número diferene de 0 é um boleano verdadeiro. 
//Por conta da tipagem fraca a atribuição deve ser feita com o operador de negação duas vezes
logado = 1;
console.log(typeof logado);

logado = !!1;
console.log(typeof logado);

//Expressões que retornam True
console.log("Qualquer inteiro: " + !!1);
console.log("Qualquer inteiro negativo: " + !!-1);
console.log("Strings com qualquer caracter: " + !!" ");
console.log("Array, mesmo que vázio: " + !![]);
console.log("Objetos liteirais: " + !!{});
console.log("Infinito: " + !!Infinity);

//Expressões que retornam False
console.log("Zero: " + !!0);
console.log("String vázia: " + !!"");
console.log("Nulos: " + !!null);
console.log("Not A Number: " + !!NaN);
console.log("Undefined: " + !!undefined);

// **Curiosidades**
//Da pra fazer uma espécie de operador ternário 
let  nome = "";

//Nome foi resolvido pra boleano por estar em uma expressão que retorna booleano
console.log(nome || "Desconhecido");
