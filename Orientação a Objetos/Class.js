//A questão de classe em JS é mais estética do ponto de vista de código, no final tudo vira função

class Launch{

    //Constructor nada mais é do que uma função construtora
    constructor(name, value) {
        this.name = name,
        this.value = value
    }
}

class Circle{
    constructor(month, year) {
        this.month = month,
        this.year = year
        this.releases = [] 
    }

    addLaunch() {
        //Eu tenho que definir i porque eu estou no contexto léxico da uma função que pertence a um objeto...
        //Por natureza o JS vai procurar esse atributo na classe 
        for(let i in arguments){
            this.releases.push(arguments[i])
        }
    }

    sumary() {
        let total = 0;
        this.releases.map(launch => total += launch.value)

        return total
    }   
}

const salary = new Launch('Salary', 700);
const check =  new Launch('Energy', -200)

const accountBank = new Circle('Oct', 2020)
accountBank.addLaunch(salary, check);

console.log(accountBank.sumary());