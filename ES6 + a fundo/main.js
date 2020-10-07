//Códigos antes do ES6 será convertido para 
class List {
    constructor() {
        this.datas = [];
    }

    add(data) {
        this.datas.push(data);
    }
}


class TaskList {
    
    constructor(){
        this.tasks = [];
    }

    //Como meu contexto é de uma classe, eu preciso do this para acessar os atributos
    addTask() {
        this.tasks.push('New task'); 
        console.log(this.tasks);
    }
}

const myList = new TaskList();
document.getElementById('newTask').onclick = () => {
    myList.addTask();
}