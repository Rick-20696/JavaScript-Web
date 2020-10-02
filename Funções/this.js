//A variação do this (palavra reservada que referencia o local atual) 
//é um pouco confusa quando estando fora de função arrow

//contexto global
function self() { console.log(this === global) };

self();

//Contexto da variável
const a = function () { console.log(this !== global);}

//contexto do objeto
const obj = {
    func: function () {
        console.log(this !== global);
    }
}

obj.func();

