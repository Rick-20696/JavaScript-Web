//JSON != Object literal

//Objetos em JS são do tipo chave-valor. Posso ter apenas atributos, atributos e funções e até objetos
const product1 = {}
const product2 = {
    name: "Moto E6 plus",
    price: 950.00
}
const ana = {
    name: "Ana",
    husband: {
        name: "Ramos"
    }
}

//O object não tem os atributos, mas eles foram criados e atribuídos dinâmicamenente
product1.name = "Notebook";
product1.price = 2449.99;

console.log(product1);
console.log(product2);
console.log(ana);
