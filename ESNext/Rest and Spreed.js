//Rest é utilizado para pegar o resto das informações. E sim, são funções

const user = {
    id: 1324,
    name:'Teixeira',
    occupation: 'Teaser'
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Essa aboradagem não faz tanto sentido já que existe o array "arguments"
function print (...params){
    return params;
}

const {id, ...res} = user;
const [a, ...res2] = array;

console.log(id, res);
console.log(a, res2);
console.log(print(a));
console.log(print(a, res, res2));

//Spreed propaga, repassa as informações para uma segunda estrutura de dados
console.log();

const array2 = array.map( number => number * 2);
const array3 = [...array, ...array2];
console.log(array3);

//Eu posso sobrepor as informações ou adicioanr mais alguma
const user2 = {...user, name: 'Aline'};
const user3 = {...user, salary: 4230.00};

console.log(user2, user3);