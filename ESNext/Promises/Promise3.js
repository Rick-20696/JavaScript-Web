//O tratamento de erro das promises, geralmente, são lançadas pelas funções que tem a função de devolver o valor da promise
//O tratamento é através da chamada da promise com o .catch(). Importante é que depois de um erro eu só tenho a mensagem como valor
function getValue(value, chanceError) {
    return new Promise((resolve, reject) => {
        
        if(Math.random() < chanceError){
            reject('An error occurred')
        } else {
            resolve (value)
        }
    })
}

//A falta de tratamento das promises geram erros de runtime. 
//Outra coisa é que, se for exatamente um erro de runtime como "out of memory", podemos chamar um .then() para sinalizar o fim do programa
getValue(new Date().getSeconds() * 5, 0.5)
    .then(
        //No .then, eu posso passa o 1º parâmetro que é a callback, o 2º é um tratamento de erro pra essa callback
        v => consol.log(v), 
        specificError => console.log(specificError)
    ) 
    .then(() => console.log('Wai a moment..'))
    
    //Aqui eu já tenho um tratamento mais genérico
    .catch(err => console.log(`Catch General Error: ${err}`))
    .then(() => console.log('End...'))