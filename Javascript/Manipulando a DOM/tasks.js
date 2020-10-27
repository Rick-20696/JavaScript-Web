//Primeiramente tenho que ter o controle da minha Lista, Caixa de Texto e do Botão
const list = document.getElementById("list");
const input = document.getElementById("txt");
const add = document.getElementById("btn");

//Aqui eu teria um array com as minhas tarefas, mas estou utilizando o LocalStorage para armazernar. A vantagem é que mesmo atualizando a página, eu tenho meus valores
//Inicialmente ele vem como um JSON, então eu preciso converter para array e como eu posso não ter nada, preciso de um array vazio para não dar erros
let tasks = JSON.parse(localStorage.getItem("ListTasks")) || [];

const removeTask = function (pos) {
    //splice remove o elemento do array
    tasks.splice(pos, 1);

    render();
    saveTask();
}   

const addTask = function () {
    tasks.push(input.value);
    
    input.value = "";
    render();
    saveTask();
}

const render = function () {
    list.innerHTML = "";

    //Aqui eu preciso criar as "<li>" e setar os textos e atributos e depois adicionar como filhos de outros elementos
    for (task of tasks){
        let li = document.createElement("li");
        let link = document.createElement("a");
        
        let textLi = document.createTextNode(task);
        let textLink = document.createTextNode("Exclude"); 
        
        //Aqui eu uso o link e o índice de acordo com array para fazer a exclusão, depois associo o "onclick" ao "removeTask" passando como parametro a posição de índice 
        var position = tasks.indexOf(task);

        link.setAttribute("onclick", "removeTask(" + position + ")")
        link.setAttribute("href", "#");
        link.appendChild(textLink);
        
        li.appendChild(textLi);
        li.appendChild(link);
        list.appendChild(li);
    }
}

//LocalStorage é um armazenador de dados do tipo chave-valor. É mais utilizado em coisas simples que utilizam banco de dados
const saveTask = function () {
    //A variável não tem capacidade ler estruturas complexas, então precisa converter para JSON quer é uma estrutura ideal
    localStorage.setItem('ListTasks', JSON.stringify(tasks));
}

render()
add.onclick = addTask;
