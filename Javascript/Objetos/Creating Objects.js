const { get } = require("http");

//Notação literal
const obj1 = {};

//A partir do Object
const obj2 = new Object();
const obj3 = new Object;

console.log(obj1, obj2, obj3);

//Funções construtoras. Com essas eu necessito do "new" para fazer a instância
function Product (name, price) {
    
    //Variável publica
    this.name = name;

    //Variável encapsulada
    this.getPrice = () => price;
}

const p1 = new Product();
const p2 = new Product('Moto E6 plus', 950.00);

console.log(p1);
console.log(p2);

//Note que eu estou criando uma nova variável, não alterando
p1.name = 'Notebook';
p1.price = 2450.00;

console.log(p1);
console.log(p2);


//Funções factory
function employee(name, salary, faults){
    return {
        name, 
        salary,
        getSalary() {
            return (salary / 30) * (30 - faults)
        }
    }
}

const f1 = employee('Teixeira', 970.50, 2);
console.log(f1);

//Object create, é mais usado quando tem herança
const obj4 = Object.create(null);
obj4.name = 'AAA';
console.log(obj4);

const jsonObject = JSON.parse('{"info": "JSON"}');
console.log(jsonObject.info); 