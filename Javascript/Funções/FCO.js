//Função em JS é First Class Objet. Isso diz que a função é tratado como um dado, logo eu posso passa como um parâmetro, variável, etc...
//FCO é uma vantagem no paradigma funcional

//Função literal
function a() {
    //Retorno padrão é undefined caso não tenha o "return"
}

console.log(a());

//Atribuíndo à uma variável. Essa é uma função anônima! Vale lembrar que a função é um dado, e por isso tem outros atributos como por exemlo: bind()
const b = function () {

}

//Armazenando em um array
const c = [a, b];

console.log(c[0]());

//Armazenando em um objeto
const obj = {
    name: "Teixeira",
    talk: function () {
        console.log(`My name is ${this.name}`);
    }
}
obj.talk()

//Função como parâmetro
function run(func){
    func();
}

run(function() {console.log("Executando...");})

//Função na função
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

//A chamada dela é assim porque meu retorno é uma função, então eu passo o parâmetro seguinte
sum(2, 4)(6);
