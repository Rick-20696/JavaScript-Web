//Um objeto é uma coleção dinâmica de chave-valor

const product = new Object;

//Posso criar dinâmicamente 
product.name = 'Notebook';
product['product brand'] = 'Vaio';
product.price = 2440.00;
console.log(product);

//Deletar
delete product.price
delete product['product brand'];
console.log(product);

//Ou criar estáticamente
const car = {
    model: 'Fiat',
    name: 'Siena',
    value: 39000,
    owner: [
        {
           name: 'Teixeira',
           cpf: 'xxx.xxx.xxx-xx',
           address: {
               logradouro: 'Av. Brasil',
               number: '9810'
           }
        },
        {
            name: 'Aline',
            cpf: 'yyy.yyy.yyy-yy',
            address: {
                logradouro: 'Av. Brasil',
                number: '9811'
            }
        }
    ]

}

console.log(car);

//O delete de algo que existe, mas seu atributo não, ele só retorna undefined por conta da dinâmica. 
//Mas vale lembrar que acessar membros de atributos que não existam mais, dá problema

delete car.value
delete car.owner

console.log('Not has a bug -> ', car.owner);
//console.log('Has a bug -> ', car.owner.length);
