//A classe será explicada no capítulo JS Objeto!

//A diferença é que o problema com a variação do this! em função construtora eu não preciso por consta do closure!
//Execute no browser...

//Para acessar o "name" na classe eu preciso do this. 
class People {
    constructor(name) {
        this.name = name
    }

    talk() {
        console.log(`Meu nome é ${this.name}`);
    }
}

const people1 = new People('Teixeira');
people1.talk()

const newPeople = function (name) {
    return {
        talk: function () {console.log(`Meu nome é ${name}`);}
    }
}

const people2 = newPeople ("Ricardo");
people2.talk()

console.log(typeof(people1), typeof(people1));

//Passando a classe para uma função construtora ficaria da seguinte maneira
//Mesmo não fazendo o retorno, continua sendo um objeto pois eu tenho a estrutura de chave-valor
function People1 (name) {
    this.name = name

    this.talk = function () {
        console.log(`Meu nome é ${this.name}`);
    }
}

const obj = People1('Aline')
obj.talk()