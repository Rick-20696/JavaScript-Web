//O filter é mais usado quando se tem filtro na busca que você está fazendo

const notes = [4.53, 3.60, 6.78, 8.99, 7.90, 6.51, 9.99, 9.92];

const cart = [
    { "name": "Iron", "Price": 3.45},
    { "name": "Notebook", "Price": 2480},
    { "name": "MOTO E6 plus", "Price": 950},
    { "name": "J5 PRO", "Price": 800}
]

//Notas maior que 7
notes.filter( n => n > 7).forEach( n => console.log(`Approved with note: ${n}`));

console.log();

//Notas menor que 7
notes.filter( n => n < 7).forEach( n => console.log(`Failed with note: ${n}`));

console.log();

//Produtos que terminam com a letra 'k' no nome
cart.filter( o => o.name.endsWith('k')).forEach( o => console.log(o.name))