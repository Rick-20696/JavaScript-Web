//O grande beneficio das promises é encapsular a leitura/consumo de arquivos
//Nesse caso eu estou fazendo de forma assíncrona, mas há comentado o código sincrono

const promise = new Promise((resolve) => {
    const fs = require('fs');
    const route =  __dirname + '/data.json';

    //const body = fs.readFileSync(route, 'UTF-8')
    //resolve(body);
    fs.readFile(route, 'utf-8', (err, body) => {
        const body2 = JSON.parse(body)
        resolve(body2)
    })

})

promise
    .then(value => console.log(value.user))
    