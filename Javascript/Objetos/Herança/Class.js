/*
 * A herança em classe no JS funciona da mesma maneira um pouco diferente.
 * 
 * Começando pelos atributos, a menos que eu tenha um valor padrão nos constructors, eu vou ter os atributos undefineds na classe herdeira.
 * Se eu tenho que chamar o o super() e this(), eu tenho que chamar o super antes por ele ser a base da classe herdeira
 * 
 * Vale lembrar que as classes herdam entre si, os objetos (variáveis) criadas não tem relação. 
 * Os atributos são os mesmo, os valores são unicos
 * 
 * Não há a questão do protótipo nos objetos, prototype aqui tem entre as classes!
 */

class GrandFather {
    constructor(name, lastName = 'Sousa'){
        this.name = name
        this.lastName = lastName
    }
}

class Father extends GrandFather {
    constructor(name, occupation){
        super(name)
        this.occupation = occupation
    }
}

class Son extends Father{
    constructor() {
        super('Matheus')
    }
}

const father = new Father('Ramos', 'Teaser')
const son = new Son();

console.log(son);
console.log(typeof son);

console.log(Object.getPrototypeOf(Son));
console.log(Object.getPrototypeOf(Father));
console.log(Object.getPrototypeOf(GrandFather));

console.log(son.__proto__);
console.log(father.__proto__);
