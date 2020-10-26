//Fazendo uma cadeia de protótipo

//Esse objeto está apontando para Object.prototype
const grandfather = {
    a1: 'A'
};
const father = {
    a2: 'B',
    ax: 'F',
    __proto__: grandfather,
};
const son = {
    a3: 'C',
    ax: 'S',
    __proto__: father
};

console.log(son.a1);
console.log(son.a2);
console.log(son.a3);
console.log(son.a4);

//Se eu acesso objetos que tem no herdeiro e no antecessor, o que será trazido é o do herdeiro. 
//Exatamente como acontece nas funções, em JS chama-se sombreamento, mesma coisa de sobreescrita. 

console.log(son.ax, father.ax);

const car = {
    speedActually: 0,
    speedMax: 200,

    speedUp(delta) {
        if(this.speedActually + delta <= this.speedMax)
            this.speedActually += delta;
        else
            this.speedActually = speedMax
    },

    status() {
        return `${this.speedActually} Km/h of ${this.speedMax}`;
    }
}

const ferrari = {
    model: 'F40',
    
    //Aqui eu estou apenas sobreescrevendo a função status() com o super que referencia o __proto__
    speedMAx: 324,

    status() {
        return `${this.model} -> ${super.status()}`;
    }
}

//console.log(ferrari.status()); -> estou apenas sobreescrevendo, mas eu necessito de ter um antecessor que tenha a função status()

const volvo = {
    model: 'V30',
}

//Estabelecendo a relação -> argumento1 extends argumento2.
Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);
console.log(ferrari, ferrari.status());

//Mesmo não tendo o atributo no objeto, o antecessor passa para o herdeiro e assim consigo acessar
console.log(volvo.speedMax);