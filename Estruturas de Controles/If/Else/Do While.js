//Do While é também ideal para loops com repetições indeterminadas, mas não é tanto usado por que a condição de permanência é verificada no fim

const numberRandom = function(min, max){
    return Math.floor(Math.random() * (min - max) + max);
}

//No caso do While, não era nem pra entrar no loop
let option = 0;

do {
    option = numberRandom(0, 10);
    console.log("A opção escolhida foi: ", option);
} while (option != 0); 