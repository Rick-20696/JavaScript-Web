const printResult = function (note){
    if (!(Number.isSafeInteger(note)) || note > 10)
        throw new Error("Argumento passado é inválido");

    Math.floor(note);

    //O switch entra em um dos casos e executa todos os outros abaixos, graças a isso pode se fazer para que execute uma coisa em vários casos (imitando um intervalo)
    //Vale lembra que tenho que colocar explicitamente os "cases"
    switch(note){
        case 10:
        case 9: 
            console.log("Muito bom!");
            break;
        case 8:
        case 7:
            console.log("Aprovado");    
            break;
        case 6:
        case 5:
        case 4:
            console.log("Recuperação");
            break;
        default:
            console.log("Reprovado");
            break;
    }
}

printResult(3);