//Códigos antes do ES6 será convertido para 

class List {
    constructor() {
        this.array = [];
    }

    //Como meu contexto é de uma classe, eu preciso do this para acessar os atributos
    add(element) {
        this.array.push(element);
    }
}

//Isso é uma herança
class TaskList extends List{

}

const myList = new TaskList();
document.getElementById('newTask').onclick = () => {
    //Funciona do mesmo jeito
    myList.add();
}