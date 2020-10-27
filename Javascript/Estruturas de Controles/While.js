//While é o mais ideal para loops com repetições indeterminadas!

const numberRandom = function(min, max){
    return Math.floor(Math.random() * (min - max) + max);
}

let option = 1;

while (option != 0){
    option = numberRandom(0, 10);
    console.log("A opção escolhida foi: ", option);
}