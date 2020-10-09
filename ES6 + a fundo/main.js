//Códigos antes do ES6 será convertido para 

class List {
    constructor() {
        this.array = [];
    }

    //Como meu contexto é de uma classe, eu preciso do this para acessar os atributos
    add(element) {
        this.array.push(element);
        console.log(this.array);
    }
}

//Isso é uma herança. Eu posso também adicionar outras coisas nela
class TaskList extends List{
    constructor(){
        //Chamando o construtor de List
        super();

        this.user = 'Ricardo';
    }

    printUser() {
        console.log(this.user);
    }
}

class TaskList2 {
    constructor() {
        this.tasks = [];
    }

    //Métodos estáticos não enxergam o restante da classe...
    //server, geralmente, para receber um valor e retornar outro independente da classe!
    static addTask() {
    //    this.tasks.push('New Task');
    //    console.log(this.tasks);
    }
}

class MyMath {
    //Aqui é apenas um exemplo, mas serve para demonstrar que métodos estáticos são independentes! 
    static sum(a, b){
        return a + b;
    }
}

const myList = new TaskList();
document.getElementById('newTask').onclick = () => {
    //Funciona do mesmo jeito
    myList.add('New task');
    myList.printUser();
}

console.log(MyMath.sum(5, 5));
TaskList2.addTask();