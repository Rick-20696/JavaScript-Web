//Pode-se usar destructuring em funções também

//Aqui eu estou passando como parametro um destructuring, na chamada eu passo meu objeto
function rand({min = 0, max = 1000}){
    const value =  Math.random() * (max - min) + min;
    return Math.floor(value);
}

const obj = {
    max: 50,
    min: 20
}
console.log(rand(obj));

//Não necessáriamente tenho que passar uma constatne/variável que seja um object
console.log(rand({min: 900, max: 1500}));
console.log(rand({}));
