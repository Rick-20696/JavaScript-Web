//A questão de não deixar nada no escopo global é justamente o conflito de outras partes do código

//Mas eu posso expor algo no contexto global e eu faço assim para que qualquer outros arquivos:
global.utility = {
    name: 'Ult 1',
    description: 'bla bla bla bla',
    value: 1
}