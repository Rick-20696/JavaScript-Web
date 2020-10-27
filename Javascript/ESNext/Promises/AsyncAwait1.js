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

//assíncrono
//Nesse caso, as escritas serão colocadas no console primeiro que os valores das promises
let getStudents1 = () => {
    const clasA = getClass('A');
    console.log('Class A');
    clasA.then(console.log);
    
    const clasB = getClass('B');
    console.log('Class B');
    clasB.then(console.log);
    
    const clasC = getClass('C');
    console.log('Class B');
    clasC.then(console.log);
}

//Assincrono como sincrono
// → await só funciona em funções demarcadas com async
let getStudents2 = async () => {
    
    // → await não deixa o código de baixo ser excutado se caso esse não tenha sido resolvido, a promise não tenha sido resolvida
    const clasA = await getClass('A');
    console.log('Class A');
    console.log(clasA[0]);
    
    const clasB = await getClass('B');
    console.log('Class B');
    console.log(clasB[0]);
    
    const clasC = await getClass('C');
    console.log('Class C');
    console.log(clasC[0]);
}

getStudents2()