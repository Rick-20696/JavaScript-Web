//IIFE -> Immediately Invoked Function Expression
//Funções auto invocada, principalmente quando se usa o browser, serve para fugir do escopo global

//Eu estou passando a função dentro de parenteses e executando em seguida com o "()"
//Dentro dela eu defino meus dados para que não sejam facilmente visíveis e manipuláveis
(function () {
    console.log('Executando...');
    console.log('Contexto léxico da função, fora do global');
})()