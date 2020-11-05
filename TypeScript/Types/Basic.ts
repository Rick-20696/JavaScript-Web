//A inferência de tipos funciona muito bem, porém quando inferido o tipo será fixo!
let s = 'TypeScript';
console.log(typeof s);
//a = 123;

//Em relação aos números, o ts usa o mesmo conceito do js: não diferencia int de float
let b = 123;
console.log(typeof b);

b = 123.5
console.log(typeof b);

//O problema é que muitos tipos são resolvidos para booleanos, então algo assim é possível porque código TS é convertido para JS
//No JS da super certo isso, por isso não acontece erros.
let c = false;
//c = 1;
console.log(c);

//Se eu crio variáveis sem valor, a tipagem do TS não funciona e acaba assumindo a tipagem do JS (dinâmica)
let month
month = 10;
console.log(month);

month = 'Octuber'
console.log(month);

//Os arrays funcionam como nos outros exemplos, pela inferência. 
const array = ['Teixeira'];
//array.push(123);

//Eu posso definir que o array recebe qualquer tipo com "any".
const array2: any[] = ['Teixeira', 123];

console.log(array, array2);
