//Object.create() com herança e for

const father = {
    name: 'Ramos',
    hair: 'Black'
}

//Aqui eu digo que son herda de father, este será o __proto__ desse
const son1 = Object.create(father);
son1.name = 'Teixeira'

//Posso tanto passar meu prototype quanto definir propriedades
const son2 = Object.create(father, {
    name: {
        value: 'Aline',
        writable: false,
        enumerable: true
    }
});


console.log(son1);
console.log(son2, '\n');

for(key in son2){

    //Propriededes herdadas não do objeto herdeiro e sim do antecessor, podemos certificar assim 
    son2.hasOwnProperty(key) ? console.log(key) : console.log(`${key} has been Inherited`);
}
