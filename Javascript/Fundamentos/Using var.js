//A vizualização de variáveis no JS é um pouco diferente quando estão em um bloco de código
//Teoricamente eu não poderia acessar, mas porém eu consigo pois no JS não importa 
//Escopos em JS só existe, isso quanto se trata de var, o Global e o escopo de Function
{{{var str = "String"}}}

function vr (){var nStr = "New string"}

console.log(str);
//console.log(nStr);

//O problema de var é que se eu tenho duas variáveis no escopo global com mesmo nome, uma acaba sobreescrevendo a outra
var number = 10;
{
    var number = 12;
    console.log("number = ", number);
}
console.log("number = ", number);
