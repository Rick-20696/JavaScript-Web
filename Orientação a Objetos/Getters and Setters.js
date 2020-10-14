//getters and setters são a base para acesso a atributos privados.

//JS não tem a questão de atributos privado, mas temos uma conveção para saber o que é privado ou não
const obj = {
    
    //Private
    _value: 1, 

    get value () {return this._value},
    set value (value) {
        //Aqui eu posso ter mecanismos de defesa contra valores incosistentes.
        this._value = value
    }  
}

//Diferente do exemplo do "Creating Objects.js -> Product", aqui eu estou alterando o valor
console.log(obj.value);
obj.value = 3;
console.log(obj);
console.log(obj._value);
