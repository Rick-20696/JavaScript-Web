let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Break age em cima do bloco de LOOP interrompedo a iteração
for(number in numbers){
    if(number == 6) 
        break;

    console.log(number);
}

//Continue age em cima do IF iterromendo o código abaixo e indo para a próxima iteração
for(number in numbers){
    if(number == 6) 
        continue;

    console.log(number);
}