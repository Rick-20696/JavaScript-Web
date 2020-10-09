//A importação e exportação de infomações acontece de acordo com o que eu quero usar daqui em outro lugar

export function sum(a, b){
    return a + b;
}

//Export default é quando meu módulo só tem uma responsabilidade própria que exportar uma única coisa
export default function sub(a, b){
    return a - b;
}
