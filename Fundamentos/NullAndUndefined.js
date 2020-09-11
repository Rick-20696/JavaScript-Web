//null não serve apenas para Objects como em outras linguagens, null diz que não há valores literais e nem valores de referencia
//undefined diz que o valor está indefinido e definido. 
let value;
console.log(value);

value = null 
console.log(value);

//"product" tem um valor (um Object), mas o atributo "price" não tem valor (undefined)
const product = {};
console.log(product);
console.log(product.price);
