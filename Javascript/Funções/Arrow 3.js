//Uma função comum, nesse contexto, aponta para o GLOBAL
let a = function (param) {
    console.log(this === param);
}

a(global);

//Agora eu estou fixando o this ao obj, veja que estou fixando a função mesmo e não o resultado. 
const obj = {}
a = a.bind(obj);

//Agora fica com o this diferente
a(global);
a(obj);

//O caso do this de uma função arrow consegue ser resitente até com bind().
//Vale lembrar que ele não irá apontar par o global aqui no Node e sim para o this ou o módulo (arquivo)
let b = (param) => console.log(this === param);
b(global);
b(this && module.exports);

b = b.bind(obj);
b(obj)
