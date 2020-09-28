//Aula da rocketseat

function interval () {
    console.log("Executed in 1 second! ");
} 

//Passo a função a ser executada em x milisegundos depois
setTimeout(interval, 3000);

//Se eu passo apenas o nome da função como argumento, eu passo o Escopo e não chamo a função para ser executada
setInterval(interval, 1000);

