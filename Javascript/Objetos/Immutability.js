/**
 * Por JS ser dinâmico, flexível e pouco tipado, ele tem uma baixa proteção dos dados.
 * A imutabilidade dos dados, objetos é interessante ou até obrigatório em determinados pontos
 * 
 * Funções úteis
 */

//Não é possível adicionar mais atributos, eu posso mudar ou remover apenas
const product = Object.preventExtensions({
    name:'Moto E6s',
    price: 950
})

delete product.price;
product.name = 'Notebook'
product.price = 2480
console.log(product);
console.log(Object.isExtensible(product));

//Selagem é quando eu quero deixar o objeto "estático" podendo apenas alterar
const product1 = {
    name: 'Moto E6 plus',
    price: 950
}
Object.seal(product1)

product1.price = 1059
product1.description = 'A cell phone'
console.log(product1);
console.log(Object.isSealed(product1));

//Freeze, é exatamente estático o objeto
const product2 = {
    name: 'Notebook vaio',
    price: 2480
}
Object.freeze(product2);

product2.name = 'Notebook'
product2.description = "A notebook vaio"
console.log(product2);
console.log(Object.isFrozen(product2));
