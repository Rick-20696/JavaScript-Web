//JSON -> Java Script Object Notation. É uma forma textual de dados para interoperabilidade.
//interoperabilidade -> carrega dados próprios e não do soft, application e é usado em várias linguagens porque é muito fácil de ser lido

const obj = {
    atributeA: 'atr A',
    atributeB: 'atr B',
    atributeC: 'atr C',
    atributeD: 'atr D',
}

const json = JSON.stringify(obj)

console.log(json);
console.log(JSON.parse(json));

//A escrita de JSONs é apenas assim: ` "Atributo": valor/"valor" `
//O JSON aceita qualquer tipo, booleans, string, numbers, arrays, objects exceto funções
console.log(JSON.parse(`{
    "atributeA": atr A,
    "atributeB": atr B,
    "atributeC": atr C,
    "atributeD": atr D,
}`));
