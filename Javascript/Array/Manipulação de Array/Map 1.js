//O map() é uma função que eu posso fazer uma transformação do array em array com elementos transformados

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Como o map() retorna um novo array, eu estou já juntando com a função do forEach() 
array.map( element => element * 2).forEach((element) => console.log(element))

//Vale lembrar que o map() retorna um array com o mesmo tamanho do anterior, ele jamais transformara o array original
console.log(array);

//Essa "concatenação" map acontece assim: quando o 1º map terminar, eke retornará um novo array, e é nesse que o 2º map irá agir e assim sucessivamente
const newArray = array
    .map( e => e + 10)
    .map( e => e * 3)
    .map( e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`)

console.log(newArray);