//Pelo incrível que pareça, o Array é um objeto. Mas sua estrutura é organizada por índice e não por chave-valor

console.log('The class is a function: ' + typeof Array,
            '\nBut the instance is an Object: ' + typeof new Array,
            '\nAn literal Array too is an Object: ' + typeof []);


//O Array em JS é heterogêneo, mas é uma boa prática ter um array de apenas um tipo.
const het = [true, false, null, undefined, 'Any', 1, 2.25, 'A'];

let approveds = new Array('Teixeira', 'Herran', 'Ricardo');

//Essa é a forma mais usual de criar arrays
approveds = ['Teixeira', 'Herran', 'Ricardo'];
console.log('\nIndex 0: ' + approveds[0]);
console.log('Index 1: ' + approveds[1]);
console.log('Index 2: ' + approveds[2]);

//A substituição precisa ser pelo índice
approveds[0] = 'Aline'

//A forma mais apropriada para inserir elementos num array é pelo push()
approveds.push('Hilário');

//Se eu insiro um elemento num índice muito distante do limite lógico (índice que está preenchido), o intevalo fica undefined
approveds[9] = 'Another';
console.log(approveds[5, 6, 7, 8] === undefined);
console.log('Size of array' + approveds.length);
