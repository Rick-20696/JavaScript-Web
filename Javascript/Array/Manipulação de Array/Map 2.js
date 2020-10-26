//Retornando os preços de um JSON
const cart = [
    '{ "name": "Iron", "Price": 3.45}',
    '{ "name": "Notebook", "Price": 2480}',
    '{ "name": "MOTO E6 plus", "Price": 950}',
    '{ "name": "J5 PRO", "Price": 800}'
]

const newArray = cart.map(e => JSON.parse(e)).map( e => e.Price)
console.log(newArray);