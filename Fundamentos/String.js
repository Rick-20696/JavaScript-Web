//String -> usa aspas ou simples

const s = "String";

//Se vocÊ pegar um caracter cujo índice seja vázio, ele não apontará erros
console.log(s.charAt(6));

//Verifica se tem o caracter na String e retorna o índice
console.log(s.indexOf("r"));

//Faz uma nova string
console.log(s.substring(3));

//Troca todos os caracteres em uma string por outros
console.log(s.replace("i", "1"));

//String pra array: aqui eu passo uma String e o regex de sepração
console.log("Aline, Ricardo, Teixeira".split(", "));