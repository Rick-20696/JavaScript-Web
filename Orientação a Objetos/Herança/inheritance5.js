//Algumas curiosidades do conceito de protótipo em alguns elementos do JS

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Como eu posso adicionar atributos ao meu objeto de protótipo, também posso adicionar funções.
//Essas funções não funcionariam se fosse arrow functions porque eu só acesso o conteúdo pelo this, e ele precisa ser variável
String.prototype.reverse = function() {

    /* 
     * split - > separa a string pela regex. Aqui eu não passei nenhuma regex, então será separado cada caracter
     * reverse - > reverte os elementos de um array, vale lembrar que esse é o reverse de Array.
     * join -> junta os elementos
     */

    let string = this.split('') 
    .reverse()
    .join('');

    return string
}

Array.prototype.getFirst = function () {return this[0]} 

console.log('Teixeira'.__proto__, 'Teixeira'.reverse());
console.log([1, 2, 3].getFirst());

//O grande B.o é quando você sobreescreve funções existentes, Não faça isso!

String.prototype.toString = function() {
    return 'Shit...'
}

console.log('Teixeira'.reverse());