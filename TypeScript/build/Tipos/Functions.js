"use strict";
//Aparentemente uma função comum, mas o retorno dela estpa amarrado ao tipo String
//A grande vantagem de fazer isso é quando o retorno é salvo em variáveis, a inferência será mais precisa
function getText() {
    return 'text';
}
console.log('a');
//Funções que não retornam nada posso usar o tipo void, vale lembrar que ele não aceitara mais um retorno qualquer
function printText() {
    console.log(getText());
    //return '';
}
printText();
//Em ts é possível definir os tipos de parâmetros. 
//É possível usar a função sem definir os tipos. Mas em TS é "obrigado", em alguns casos, definir, por isso fica vermelho sem a tipagem nos params
function plus(numA, numB) {
    return numA + numB;
}
console.log(plus(1, 2));
