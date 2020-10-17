/*
 * A herança em JS é baseada em protótipos!
 *
 * Como eu tenho a posssibilidade de buscar uma variável "x" dentro de um escopo mais interno (funções, objs, etc),
 * e também buscar a mesma variável no cluser, os objetos herdeiros tem seus próprios valores que podem mudar! 
 * 
 * Mas senão houver o atributo que estou buscando no herdeiro, eu vou buscar no objeto antecessor
 *
 */

const ferrari = {
    model: 'F4O',
    speedMax: 345,
}

const volvo = {
   model: 'V30',
   speedMax: 200, 
}

//__proto__ -> quem é o protótipo do objeto
console.log(ferrari.__proto__);

//Esse atributo representa o objeto de protótipo. 
//Esse atributo de qualquer objeto aponta, por padrão, para "Object.prototype" que seria o mais alto na hierarquia
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MyObject() {}

console.log(typeof Object, typeof MyObject);
console.log(Object.prototype, MyObject.prototype);
