//Criando uma promise manualmente
const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('ok'), 2000)
});

//promise().then(response => {console.log(response)}).catch(error => {console.log(error)});

//Fazendo com async await. É quase a mesma coisa que o .then. Porém mais fácil
async function runPromise(){
    //O await vai permitir que a linha de baixo execute apenas quando essa estiver pronta
    const response = await promise();

    console.log(response);
}

runPromise();