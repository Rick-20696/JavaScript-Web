//Imperativo -> Eu dito e ensino exatamente todos os passo para uma determinada tarefa
//Declarativo -> Eu apenas o que tem que ser feito

const studentsA = [
    {name: 'Aline', note: 6.78, scholarship: false},
    {name: 'Teixeira', note: 7.8, scholarship: true},
    {name: 'Ricardo', note: 9.88, scholarship: false},
    {name: 'Sousa', note: 6.54, scholarship: true}
]

//Imperativo
let total = 0;
for(let i = 0; i < studentsA.length; i++){
    total += studentsA[i].note;
}
console.log(total / studentsA.length);

//Declarativo
const notes = s => s.note;
const sum = (ac, n) => ac + n;
const total2 = studentsA.map(notes).reduce(sum);
console.log(total / studentsA.length);

/*
 * A grande questão do declarativo é que, quem for o encarregado da tarefa,
 * deve-se tomar devidos cuidados para uma próxima tarefa.
 * 
 * Eu tenho mais controle no declarativo por ele não ser tão monolítico.
 * E graças a isso, eu estou preparado para uma próxima tarefa. 
 * 
 * Digamos que eu tenho que fazer a mesma tarefa para outra classe 
 */

const studentsB = [
    {name: 'Aline', note: 9.78, scholarship: false},
    {name: 'Teixeira', note: 9.8, scholarship: true},
    {name: 'Ricardo', note: 4.88, scholarship: false},
    {name: 'Sousa', note: 7.51, scholarship: true}
]

const total3 = studentsB.map(notes).reduce(sum);
console.log(total3 / studentsB.length);