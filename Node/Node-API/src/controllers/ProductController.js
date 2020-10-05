const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//Index vai trazer todos os registros da base, eu uso o await para retornar quando tiver todos pronto!
module.exports = {
    async index(require, response) {

        //Como o index retorna todos os registros, isso pode dar B.O. Então eu vou paginar os resultados com o mongoose-paginate.
        //Eu desestruturo a requisição, pegando os parâmetros GET (que são manipuláveis pelo usuário). E então eu defino minhas condições de busca (obj vázio) e as configurações de paginação
        const {page = 1} = require.query;
        const Products = await Product.paginate({}, { 
            page, //Página atual 
            limit: 10 //Limite por página
        });

        return response.json(Products);
    },

    async show(require, response) {
        const product = await Product.findById(require.params.id);

        return response.json(product);
    },

    async store(require, response) {
        const product = await Product.create(require.body);

        return response.json(product);
    },

    async update(require, response) {
        const product = await Product.findByIdAndUpdate(require.params.id, require.body, { new: true});

        return response.json(product);
    },

    async destroy(require, response) {
        await Product.findByIdAndRemove(require.params.id);

        return response.send();
    }
}