//O problema nas condicionais é por conta da quantidade de tipos que são resolvidos para Boleanos

function printOnlyIfTrue(value){
    if(value){
        console.log("Is true: ", value);
    }
}

//Valores que são convertidos para falso
printOnlyIfTrue();
printOnlyIfTrue(null);
printOnlyIfTrue(undefined);
printOnlyIfTrue(NaN);
printOnlyIfTrue("");
printOnlyIfTrue(0);

console.log();

//Valores que são convertidos para verdadeiro
printOnlyIfTrue(-1);
printOnlyIfTrue(" ");
printOnlyIfTrue([]);
printOnlyIfTrue({});
printOnlyIfTrue("?");
