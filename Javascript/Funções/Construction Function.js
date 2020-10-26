//Função contrutora é examente o mesmo conceito de *construtores* em Java, C#, Python, etc

function Car(speedMax = 200, delta = 2.5){
    //Variáveis/métodos criados sem o "this" são publicos! Sempre dê preferência, para atributos privados, o LET 
    let speed = 0;

    this.speedUp = function() {
        if(speed <= speedMax)
            speed += delta;
        else
            speed = speedMax
    }

    this.getSpeed = function () {
        return speed;
    }
}

//Mesmo sem os paramêtros dá certo, assume os valores padrões
const siena = new Car
siena.speedUp();
console.log(siena.getSpeed());

const golf = new Car(250, 5);
golf.speedUp();
golf.speedUp();
console.log(golf.getSpeed());
