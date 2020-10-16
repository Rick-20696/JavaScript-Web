//São funções que estão em Object e vão nos ajudar

const people = {
    name: 'Teixeira',
    age: 17,
    weight: 78.89
}

console.log('Attributes -> ', Object.keys(people));
console.log('Values ->', Object.values(people));
console.log('Keys and Values ->', Object.entries(people));

//Com o retorno de algumas funções eu posso fazer novas operações
Object.entries(people).forEach( ({ key, value }) => {
    //Como eu sei que o elemento que vem (array de entry), vem a chave e o valor, eu posso e consigo desestruturar
    console.log(`${key} -> ${value}`);
});

//Propriedades são como os atributos que contém restrições
Object.defineProperty(people, 'birth', {
    
    //Eu vou enumerar essa propriedade quando exposto meu objeto?
    enumerable: true,

    //Eu vou poder alterar esse atributo?
    writable: false,
    value: '03/08/2003'
})

people.birth = '30/08/2001';
console.log(people);

const obj = {a: 1};
const obj1 = {b: 2};
const obj2 = {c: 3, a: 4};

//Eu estou concatenando os elementos dos outros objetos em "obj"
//Vale lembrar que se houver algum atributo com mesmo nome, será sobreescrevido seu valor
const result = Object.assign(obj, obj1, obj2)
console.log(result);

//Deixa o objeto, e não o endereço de memória, constante
Object.freeze(obj);