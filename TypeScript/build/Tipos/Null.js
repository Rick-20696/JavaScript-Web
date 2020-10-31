"use strict";
//O TS tem o mecanismo de não permitir valores nulos por padrão, mas eu posso contornar a situação com union types ou realmente mexer no tsconfig.json 
//Uma curiosidade sobre o null em TS é que é assumido o tipo "any". Então posso colocar qualquer valor desde que já foi atrubído null
const contact1 = {
    name: 'Teixeira',
    phone: '999999999',
    address: null
};
console.log(contact1);
let example1 = null;
example1 = 1;
console.log(example1);
