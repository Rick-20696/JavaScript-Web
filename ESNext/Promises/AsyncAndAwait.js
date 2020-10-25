//A ideia de usar async await é diretamente ligado ao assincronismo, mas aqui eu transformo um código que é assíncrono para sincrono
//Geralmente são usados juntos de promises
const http = require('http');

//Por enquanto continua sendo uma função assíncrona
const getClass = char => {
    const url = `http:/files.cod3r.com.br/curso-js/turma${char}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';

            res.on('data', data => {
                result += data;
            });

            res.on('end', () => {
                try{
                    resolve(JSON.parse(result));
                } catch(err) {
                    reject(err);
                }
            });
        })
    })
}

// → await só funciona em funções demarcadas com async
let getStudents = async () => {
    
    // → await não deixa o código de baixo ser excutado se caso esse não tenha sido resolvido, a promise não tenha sido resolvida
    const clas = await getClass('A');

    return clas
}

//getClass('A').then(cl => console.log(cl))
//getStudents().then(cl => cl.map(s => s.id))
getStudents().then(students => students.map(s => s.nome)).then(s => console.log(s))