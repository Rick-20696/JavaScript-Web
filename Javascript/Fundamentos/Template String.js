//Template string é usado quando precisamos de várias concatenações. Existem situações que são permitidas pela String e outras que são apeans pelo TS

//Eu não posso quebra uma string em várias linhas como em diversas linguagens
//stg = "Ric
//ardo";

var stg = "Ricardo";

var concat = "Olá " + stg  + "!"

//É umna maneira mais simples, porém ela leva tudo ao pé da letra! (As quebras de linha são respeitadas até no print)
var templateString = `Olá
${stg}!
`;
console.log(templateString);
