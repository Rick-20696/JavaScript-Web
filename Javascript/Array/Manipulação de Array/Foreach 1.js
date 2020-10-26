//O foreach é apenas um For em que eu posso fazer algo relacionado com os elementos trazidos pelo método
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const approveds = ['Teixeira', 'Herran', 'Ricardo'];

//Tanto no forEach(), Map(), Reduce(), etc, eu tenho que passar uma callback function; e dentro deles há iterações sobre os elementos 
array.forEach((element, index) => {
    console.log(`${element} in position ${index}`);
});

//A callback function recebe apenas 3 parâmetros: elemento, índice e o próprio array. Veja que x é undefined
approveds.forEach( (element, index, arr, x) => {
    console.log(`${element} in position ${index}. The complete list [${arr}]. ${x}`);
})

//Posso passar a callback de uma variável. 
const callback = approved => console.log(`${approved}`);

//Note que as callbacks de variáveis são passadas o ESCOPO da função, eu não mando executar ela (callback())
approveds.forEach(callback)
