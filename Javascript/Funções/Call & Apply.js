//Além das formas tradicionais de se chamr uma função existem o call e apply
//Nessa função, eu pego o "desc/price" pelo objeto. Essa é uma função feita no Global, então o this varia de acordo com quem chama  
function getPrice(tax = 0, coin ='R$'){
    return `${coin} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const prod = {
    name: 'Notebook',
    price: 5000,
    desc: 0.10,
    //ele irá criar um atributo com o mesmo nome e irá buscar quem tem o mesmo nome que esse e o que ele é. No caso a função
    getPrice
}

//Se eu chamo pelo Global, resolve para NaN. Se eu chamo pelo objeto da certo
console.log(getPrice());
console.log(prod.getPrice());

//Usando call e apply. A diferença é apenas na passagem de parâmetros

const car = {price: 40000, desc: 0.20}
const bike = {price: 2500, desc: 0.3}

console.log('\ncall', getPrice.call(car));
console.log('apply', getPrice.apply(bike));

//Independente de qual função, eu passo sempre o contexto lexíco primeiro. Depois os parâmetros da função!
console.log('\ncall', getPrice.call(car, 0.25, '$'));
console.log('apply', getPrice.apply(bike, [0.02, '$']));
