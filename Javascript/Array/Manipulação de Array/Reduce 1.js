//O reduce é usado quando eu quero transformar o meu array em uma única coisa ou demais objetos.
//Diferente dos outros 3 principais métodos do Array, a callback do reduce recebe um parâmetro amais, um acumulador

const students = [
    {name: 'Aline', note: 6.78},
    {name: 'Teixeira', note: 7.8},
    {name: 'Ricardo', note: 9.88},
    {name: 'Sousa', note: 6.54}
]

//Na callback do reduce, eu sempre passo o acumulador primeiro. Como não passei aqui, veio a primeira nota
//Já o segundo parâmetro é o elemento. 
const result = students.map(s => s.note).reduce( (ac, n) => {
    //Aqui ele está sempre fazendo o a soma dos parâmetros e o resultado da soma entra no lugar de 'ac'
    console.log(ac, n);
    return ac + n;
});

console.log(result);

//Passando um valor inicial ele começara do primeiro elemento
const result2 = students.map(s => s.note).reduce( (ac, n)  => {
    console.log(ac, n);
    return ac + n;
}, 10 );
console.log(result2);