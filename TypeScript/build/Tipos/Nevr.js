"use strict";
//Never é um tipo em TS e é usado em funções que não tem fim, ou seja, funções de loop infinito ou que lançam exceções
function err(msg) {
    //while(true) {}
    throw new Error(msg);
}
const product = {
    name: 'Notebook',
    price: 0,
    validate() {
        if (this.name.trim().length <= 0 || !this.name) {
            err('Nome inválido');
        }
        if (this.price <= 0)
            err('Preço inválido');
    }
};
product.validate();
