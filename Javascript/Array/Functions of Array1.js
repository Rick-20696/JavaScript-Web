//Algumas funções valiosas para usar com arrays

//Vale lembrar que o Array é um Object, e por isso aponta para um endereço de memória
const approveds = ['Teixeira', 'Herran', 'Ricardo'];
console.log(approveds);

//Sort() -> Reordenarção
console.log(approveds.sort());

//Delete não é uma função de array, mas é bom comentar sobre
//Delete vai inserir um elemento undefined no lugar do índice selecionado
console.log(delete approveds[1]);
console.log(approveds[1]);

//Push() -> Adiciona elementos no último índice
approveds[1] = 'Ricardo';
approveds.push('Hilário');
approveds.push('João');
console.log(approveds);

//Splice() -> Adiciona, Remove e também faz as duas coias ao mesmo tempo
approveds.splice(3, 1);
console.log('From index 3, remove 1 element', approveds);

approveds.splice(3, 0, 'Hilário');
console.log('From index 3, remove 0 element and add the new element', approveds);

approveds.splice(3)/
console.log('"Sub Array" ->', approveds);
  