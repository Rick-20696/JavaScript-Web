//Não é um banco em si, mas sim um "simulador"

//Objetos privados ao módulo
const sequence = {
    _id: 1,
    get id() {return this._id++}
}

//Products é uma espécie de uma lista que agrupa os products  
const products = {}

//Funções públicas
function save(product){
    //Isso é um mecanismo faz um incremento no id dos produtos
    if(product.id === undefined) 
        product.id = sequence.id;

    //Um fato curioso aqui é, eu estou criando dinamicamente o atributo "id" que será o valor de "product.id"
    //products.product.id = product; -> eu não poderia fazer assim porque eu não consigo setar o atributo "id" de "product", este é undefined
    products[product.id] = product;
    return product;
}

function getProduct(id){
    return products[id] || {}
}

function getProducts(){
    return products
}

module.exports = {save, getProduct, getProducts}

/**
 * Alguns produtos para testar no insonmia/postman:
 * 
{
	"name": "J5 PRO",
	"Price": 800
}
{
	"name": "J5",
	"Price": 700
}
{
	"name": "Notebook",
	"Price": 2438
}
 */