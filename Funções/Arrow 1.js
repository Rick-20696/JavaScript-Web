//Características das funções Arrow

/*1 - Funções Arrow tem o this fixado ao contexto lexíco que ela foi criada. 
 *2 - Sintaxe reduzida
 *3 - São funções anônimas 
 *4 - Se não tiver os {} na minha expressão, o retorno está implícito   
 */

let square = function (a) {
    return a * 2;
}

console.log(square(10));

square = (a) => { 
    return a * 2 
}

console.log(square(10));

square = a => a * 2;

console.log(square(10));

run = () => "Executando..."

console.log(run());