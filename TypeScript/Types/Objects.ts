//Os tipos objetos também são válidos no mundo typescript

//Aqui está acontecendo apenas a inferência. Mas esse objeto e os tipos dos atributos dele está amarrado à variável
//Definido, eu não posso trocar os tipos dos valores, nem os nomes dos atributos! 
let user = {
    name: 'Teixera',
    password: '123456'
}

//user = {};
//user = {nm: 'Aline', pass: '12356'}

//Eu posso explicitar também os tipos
let user2: {name: string, password: string};

console.log(user);
