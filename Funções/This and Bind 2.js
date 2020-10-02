//Isso é uma função construtora. Falo disso em "Construction Function.js"
function People() {
    this.idade = 0;
    
    //se eu não tiver o bind(), meu this vai apontar para o contexto lexíco do "setInterval"...
    //E já que funções contém outras funções, eu posso chamar atráves do "}" da função anônima para que a idade seja referenciada corretamente
    setInterval(function () {
        this.idade++; console.log(this.idade);
    }.bind(this), 1000)
}

People()