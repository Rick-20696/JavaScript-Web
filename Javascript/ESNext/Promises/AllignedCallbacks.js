//Em alguns cenários é possível usar as famosas callbacks, mas dependendo do caso, as promises serão melhores...
//A ideia é não utilizar o axios porque depois esse exemplo será convertido para promise
const http = require('http');

const classA = 'http://files.cod3r.com.br/curso-js/turmaA.json'
const classB = 'http://files.cod3r.com.br/curso-js/turmaB.json'
const classC = 'http://files.cod3r.com.br/curso-js/turmaC.json'

//Esse é um método que tem a estratégia de aninhar as callbacks, que não é tão interessante
const getClass = (char, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${char}.json`;
    
    //O get() de 'http' retorna uma resposta e através dela eu vou fazer o trabalho de pegar os dados
    http.get(url, res => {
        let result = '';

        //Aqui eu pego os dados concatenando no resultado, uma curiosidade é que esses dados chegam aos poucos
        res.on('data', data => {
            result += data;
        })

        //Aqui, quando terminar de chegar todos, o fim (end) da resposta chega e através dele eu passo uma callback
        res.on('end', () => {
            //E aqui que eu coloco a estratégia de chamar varias callbacks
            callback(JSON.parse(result));
        })
    });
}

//O objetivo aqui é pegar todos os nomes dos alunos. Fica estranho e difícil de ler 
let names = []
getClass('A', students => {
    names = names.concat(students.map(s => `A -> ${s.nome}`));

    getClass('B', students => {
        names = names.concat(students.map(s => `B -> ${s.nome}`));

        getClass('C',  students => {
            names = names.concat(students.map(s => `C -> ${s.nome}`));
    
        });
    });
})
