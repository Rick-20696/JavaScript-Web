//Operadores de atribuição: destructuring, esses são usado para extrair dados (atributos) de uma estrutura (no caso o Object)
const people = {
    name: "Teixeira",
    age: 17,
    address: {
        log: "Village people",
        number: 1010
    }
}

//A sintaxe é (tipo {x1, x2} = nomeEstrutura) -> Em leitura: retire os atributos x1 e x2 da estrutura Z
//Eu desestruturo algo quando tenho a necessidade de usar  
const {name, age} = people;
console.log(name, age);

//Posso renomear
var {log: l, number: n} = people.address;
console.log(l, n);

//Da pra extrair mesmo não havendo na estrutura: caso não tenha posso setar valores default 
let {middleName, olderAge = false} = people;
console.log(middleName, olderAge);