//São algumas melhorias com a notação literal de objetos a partir do ES6

const a = 1;
const b = 2;
const c = 3;
const note = 'note'
const value = 7.21

//Antes do ES6, sem sintaxe curta de objeto
const obj1 = {a: a, b: b, c: c};
const obj2 = {a, b, c};

console.log(obj1, obj2);

//Também pode-se fazer assim
const obj3  = {}
obj3[note] = value;
console.log(obj3);

//Funções antes do ES6
const obj5 = {
    function1: function() {

    },
    function2 () {

    }
}
console.log(obj5);