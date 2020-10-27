//Além do templete string, podemos processar templates por função, ou seja, interceptar funções. Se chama tagged template
//O objetrivo de um tagged template é controla a conversão 
function tag(part, ...values){
    console.log(part);
    console.log(values);

    return 'String intercepted';
}

const student = 'Teixeira';
const status = 'Approved';

//Não tem a necessidade de usar o parenteses na chamada 
console.log(tag `The stundet ${student} was ${status}`);