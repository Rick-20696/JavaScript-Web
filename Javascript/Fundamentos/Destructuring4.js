//Dessa vez eu estou passando o operador para um array e corrigindo o problema do "min" ser maior que o "max"
function rand([min = 0, max = 1000]){

    if (min > max) [min, max] = [max, min];

    const value =  Math.random() * (max - min) + min;
    return Math.floor(value);
}

//No array, posso passar o primeiro valor ou o último, passar um array vázio, etc
console.log("rand1 -> ", rand([50, 30]));
console.log("rand1 -> ", rand([50]));
console.log("rand1 -> ", rand([, 30]));

function rand2([min = 0, max = 1000]){
    
    const value =  Math.random() * (max - min);
    return Math.floor(value);
}

//é para acontecer de vir um número negativo
console.log("rand2 -> ", rand2([50, 1]));

