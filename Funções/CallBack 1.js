//Callback é muito ligado ao padrão Observer. Callback é a chamada de uma ação a partir de um evento
const corporithy = ["Fiat", "Chevrolet", "BWM"];

//A ideia de "callback" é passar uma função para outra função e quando um evento ocorre, essa função vai ser chamada de volta
function print (name, index) {
    console.log(`${index + 1}. ${name}`);
}

//Vale lembrar que quando estou PASSANDO a função como paramêtro, eu passo sem "()"
//O evento aqui é o loop. Pra cada elemento, ele trás todas as informações e assim ele vai CHAMAR de volta
corporithy.forEach(print);
corporithy.forEach((a) => console.log(a))
