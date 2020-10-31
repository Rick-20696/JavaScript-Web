"use strict";
//O union types é quando, num cenário, eu posso receber valores em dois tipos diferentes. 
//Não é como usar o tipo "any" e sim definir alguns tipos que são válidos para o meu cenário. 
//Sintaxe: type1 | type2
let noteStudent = 10;
console.log(noteStudent);
noteStudent = '10';
console.log(noteStudent);
