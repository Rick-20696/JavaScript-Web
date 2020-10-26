//O concat simplismente concatena arrays/elementos em um novo array
const names = ['Teixeira', 'Herran', 'Josefa'];
const names2 = ['Ricardo', 'Hilário', 'Cicero']

//Concatenação de arrays
console.log(names.concat(names2));

//Concatenado os arrays com elementos
console.log(names.concat('Ramos', 'Barbosa', 'Sousa'));

//Concatenando array e elementos
console.log(names.concat(names2, 'Sousa'));

//Concatenando array, matriz e elementos
//Não fica bem explicito, mas o '8' seria parte do array mais interno, '6, 7' do array mais externo
console.log([].concat([1, 2], [3, 4], 5, [[6, 7], 8]));

