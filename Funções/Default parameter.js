//Parâmetro padrão antes do ES2015

function sum1 (a, b) {
    //como posso resolver para uma expressão booleana, caso seja nulo ele recebe 1. O grande problema é com o Zero
    a = a || 1;
    b = b || 1;

    return a + b;
}

console.log(sum1(), sum1(2, 2), sum1(3, 0));

function sum2 (a, b, c) {
    //Nessa condição, se nulo, também válido. Então ele recebe 1
    a = a != undefined? a : 1;

    //Aqui eu vejo, de acordo com a posição do parâmetro, se o índice dele existe. Senão existir recebe 1
    b = 1 in arguments? b : 1;

    //Para essa função, essa é a mais segura
    c = isNaN(c)? 1 : c;

    return a + b + c;
}

console.log(sum2(), sum2(2), sum2(2, 4, 0));

//Parâmetro padrão depois do ES2015

//Essa é a forma mais usada hoje em dia
function sum3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(sum3(), sum3(1), sum3(2, 4, 6));