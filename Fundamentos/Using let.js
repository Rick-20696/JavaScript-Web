//Como let não pode receber nomes já usados ela tem escopo de bloco. Ainda, se no bloco não tem a variável, o JS irá busca no mais externo
var number = 1;
{
    let number = 2;
    console.log("Let -> ", number);
}

console.log("Var -> ", number); 