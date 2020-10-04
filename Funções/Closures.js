//Closure é o escopo criado quando a função é declarada, é o espoco que está em volta da função
//Com isso eu posso manipular quem está no closure da função

const x = 'Global';

function outside() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside
}

//O local que a "inside()" está definida é dentro de outra função e por isso o Closure dela é "outside()"
const y = outside();
console.log(y()
);