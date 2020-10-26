//O map é uma estrutura key-value, bem mais flexível que o objeto. Porém não é substutível 
const tecs = new Map();
const values = new Map();

//Inserção → valor, {object}
tecs.set('React', {Library: true, Framework: false});
tecs.set('Jquery', {Library: true, Framework: false});
tecs.set('Hibernate', {Library: false, Framework: false});

//Pegar → Camelcase faz diferença...
console.log(tecs.get('react'));
console.log(tecs.get('React'));

//Chaves variadas
values.set(() => {}, console.log('Arrow Function'));
values.set({}, console.log('Object'));
values.set(123, console.log('Numbers'));

values.get(() => {});
values.get({});
values.get(123);

//Existe?
console.log(tecs.has('Bootstrap'));
console.log(tecs.has('Hibernate'));

//As chaves são únicas, os valores podem ser repetidos
values.set(123, console.log('Numbers2'));
values.get(123);

values.set(123, console.log('Numbers3'));
values.get(123);