//Requesição AJAX ajuda a trazer informações do back-end para o front sem ter que recarregar a página denovo

//Eu primeiramente preciso de uma variável com essa classe
let xhr = new XMLHttpRequest();

//Eu pego o servidor (API) através do "open()" e passo o método "GET" porque eu quero buscar uma informações
xhr.open("GET", "https://api.github.com/users/Rick-20696");
xhr.send(null);

//O JS não espera a requisição terminar para depois executar o código, então ela é uma requisição assíncrona. Essas requisições demoram mais! 
//Então eu preciso passar para esta função que é executada quando a resposta retornar 
xhr.onreadystatechange = function() {
    //Eu preciso verificar se a resposta já retornou (o retorno é 4) para mostrar os dados. Vale lembrar que e RESPOSTA != RESULTADO, este é se deu certo ou não. Depois, eu executo meu algoritmo
    if (xhr.readyState === 4)
        console.log(JSON.parse(xhr.responseText));
}
