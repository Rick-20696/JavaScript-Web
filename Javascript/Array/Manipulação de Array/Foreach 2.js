//Essa seria uma simulação (bem ruim) do verdadeiro foreach()
const approveds = ['Teixeira', 'Herran', 'Ricardo'];

function foreac(callback, array){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i)
    }
}

console.log('My for each version 1 ');
foreac((element, index) => {
    console.log(`${element} -> ${index}`);
}, approveds)

//Uma outra versão de foreach. Lembrando que array é um objeto, eu posso definir uma propriedade a ele através de Object
Object.defineProperty(approveds, 'forEach2', {
    value: function (callback) {
        for(let i in this){
            callback(this[i], i, this)
        }
    }
})

console.log('\nMy for each version 2 ');
approveds.forEach2((element) => console.log(element))

//Uma outra versão é, fazer a mesma coisa, mas ao invés de definir uma propriedade eu defino um protype
Array.prototype.forEach3 = function (callback) {
    for(let i = 0; i <this.length; i++){
        callback(this[i], i, this)
    }
}

console.log('\nMy for each version 3 ');
approveds.forEach3( function (ele) {
    console.log(ele)
})