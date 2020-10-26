//Diferente das demais estruturas, o set não é indexado e, como já era previsível, não aceita repetição

const numbers = new Set();

//Adicionando → Pode ser chamada encadeada
numbers.add(1);
numbers.add(2).add(3).add(4);

console.log(numbers);

//Testando a repetição
numbers.add(1);
console.log(numbers);

//Existência de elementos
console.log(numbers.has(1));