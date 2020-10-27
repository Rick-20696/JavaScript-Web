//Agora vamos pegar o código de 'AllignedCallbacks.js' para transformar em promise
const { rejects } = require('assert');
const http = require('http');

const classA = 'http://files.cod3r.com.br/curso-js/turmaA.json'
const classB = 'http://files.cod3r.com.br/curso-js/turmaB.json'
const classC = 'http://files.cod3r.com.br/curso-js/turmaC.json'

const getClass = (char) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${char}.json`;
    
    //Vale lembrar que uma promise recebe dois parâmetros: resolve e reject 
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';
            
            res.on('data', data => {
                result += data;
            });

            res.on('end', () => {
                try{
                    resolve(JSON.parse(result))
                }catch(err) {
                    reject(err)
                }
            });
        })
    });
}

//Sim é quase a mesma coisa, porém podemos fazer melhor
let names = [];
getClass('A').then(students => {
    names = names.concat(students.map(s => s.nome));
    
    getClass('B').then(students => {
        names = names.concat(students.map(s => s.nome));
        
        getClass('C').then(students => {
            names = names.concat(students.map(s => s.nome));

            console.log(names);
        })
    })
})


// Promise.all é um método estático que espera todas as promisses passadas serem resolvidas e aí sim ele executa.
// Depois eu posso usar o .then() para executar minhas tarefas para serem usadas com aqueles dados retornados
const promises = [getClass('A'), getClass('B'), getClass('C')]
Promise.all(promises)
    .then(clas => [].concat(...clas))
    .then(students => students.map(s => s.nome))
    .then(names => console.log(names))