//Função factory não é nada mais que uma função construtora que constri Objetos
//Eu poderia não colocar parâmetros, mas resolvi colocar por ser um mais "complicadinho"
function newProduct (name = null, price = null) {
    //Aqui não causa conflito pois antes do ":" vem sempre o nome do atributo e nunca um parâmetro!
    return {
        name: name,
        price: price
    }
}  

const prod1 =  newProduct('Notebook', 2449.90);
const prod2 = new newProduct('Moto E6S', 950.00);

console.log(prod1.name, prod2);
console.log(typeof(prod1), typeof(prod2));

function newPeople (name, occupation) {
    //Mesmo sem por os atributos e valores, resolve-se para objeto tendo o nome do atributo com o mesmo do parâmetro
    return {
        name, 
        occupation
    }
}

console.log(newPeople('Teixeira', 'Estagiária'));
