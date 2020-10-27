//__proto__ das funções construtoras

function MyObject() {}

const obj1 = new MyObject;
const obj2 = new MyObject;

//O prótipo dos meus objetos apontam para o mesmo objeto, que não é Object e sim a minha função
console.log(obj1.__proto__ === obj2.__proto__);
console.log(Object.prototype === obj2.__proto__);
console.log(MyObject.prototype === obj2.__proto__);

//O prototype da função é um objeto
MyObject.prototype;
MyObject.prototype.name = 'Any';
console.log(MyObject.prototype);

//Uma função construtora aponta para o prototype de Function, e o prototype de Function aponta para o prototype de Object
console.log(Function.prototype === MyObject.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype);