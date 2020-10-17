//Eu consigo alterar objetos constantes porque são endereços de memória, não os atributos do objeto
const people = {name: 'Teixeira'};
people.name = 'Aline';
console.log('OK:', people);

//Código não ok -> people = {name: 'Teixeira'};

//Eu posso congelar as mudanças no meu objeto
Object.freeze(people);
people.name = 'Ricado';
delete people.name;

//Não importa qual mudança, ele não aceitara mais
console.log(people);
