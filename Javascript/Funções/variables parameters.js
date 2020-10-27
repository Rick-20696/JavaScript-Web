//toda função tem o "arguments" que é o array de parâmetros passados. Até mesmo função que não recebe  parâmetros
function parameters () {

    //for em arrays só trás o índice!
    for(i in arguments){
        console.log(arguments[i]); 
        //console.log(i);
    }
}

parameters(1, 2, 3, 4);
parameters("Olá ", "eu ", "sou ", "Ricardo");
