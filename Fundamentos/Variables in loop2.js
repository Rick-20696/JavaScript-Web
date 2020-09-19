//Um caso curioso: nesse caso, mesmo adicionando o valor na função e armazenando num array, o valor será semrpre o último (10)
const functions = [];

for (var i = 0; i < 10; i++){
    functions.push(function() {console.log(i)});
}

//Como pode-se preve, com o let da certo inserir os valores corretos
functions[2]();

const functions2 = [];

for (let j = 0; j < 10; j++){
    functions2.push(function() {console.log(j)});
}

functions2[2]();