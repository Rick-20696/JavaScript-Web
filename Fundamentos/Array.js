//Estrutura linear, heterogenea, indexada; considerada pelo JS como um Object

//Criando e adidicionando
const values = [.15, 2.99, 3.15];
values[3] = 17.55;

//Posso adicionar qualquer elemento
values.push(false, null, NaN, "String");

//Imprimindo valores
console.log("Valor do índice 0: " + values[0]);
console.log("Valor que não existe no índice: " + values[8])
console.log(values);

//Removendo: pop() remove o último elemento, delete remove o elemento do índice descrito
values.pop();
delete values[0];
console.log(values);
