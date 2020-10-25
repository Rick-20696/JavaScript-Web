//O tratamento de erros de funções async await, pode ser como nas promises, ou até mesmo com try/catch tradicional
//Aqui eu vou gerar os números de um sorteio 
function generateValue(min, max, repeted) {
    if (min > max) 
        [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const delta = max - min + 1;
        const random = parseInt(Math.random() * delta) + min;
        
        if(repeted.includes(random)){
            reject('Nuber is repeted');
        }

        resolve(random);
    })
}

//Uma curiosidade é que o await sempre acompanha a função que retorna a promise
async function raffle (qtdNumbers){
    const numbers = [];
    for(let i = 0; i < qtdNumbers; i++){
        numbers.push(await generateValue(1, 99, numbers))
    }

    return numbers;
}

raffle(15)
    .then(console.log)
    .catch(console.log);

