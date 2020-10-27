//A função bind serve para amarrar o this e impedir sua variação
function func () {console.log(this === global)}

const people = {
    a: "Good morning",
    talk() {
        console.log(this.a);
    }
}

people.talk();

//Isso da problema por que eu já estou fora do contexto do objeto
const func = people.talk;

//Com o bind, eu amarro o this para aquiele objeto. Mas eu estou amarrando o RESULTADO, não a função
const func1 = people.talk.bind(people);