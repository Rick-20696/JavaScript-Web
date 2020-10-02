function People() {
    this.idade = 0;
    
    //Como eu fiz minha função Arrow no contexto lexíco de "People()", meu this aponta corretamente.
    //Vale lembrar que no exemplo "This and Bind() 2.js", eu havia escrito a função no mesmo lugar, mas o CORPO da função está dentro de "setInterval()"
    setInterval( () => {
        this.idade++;

        console.log(this.idade);
    }, 1000)
}

People()