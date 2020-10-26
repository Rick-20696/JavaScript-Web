//A principal questão é tratar maneiras para que não seja possível a entrada de dados incossistentes
const printResult = function (note){
    //Como vários tipos podem ser resolvidas para booleano eu vou lançar um erro
    if (!(Number.isSafeInteger(note)) || note > 10)
        throw new Error("Argumento passado é inválido");

    if(note > 9)
        console.log("Muito bom!");
    else if (note > 7)
        console.log("Aprovado");
    else if (note > 4)
        console.log("Recuperação");
    else
        console.log("Reprovado");
}

printResult(10);