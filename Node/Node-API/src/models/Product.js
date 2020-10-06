//Precisamos definir o schema deste Model
//Schema do model é quais são os campos e valores que o Product pode ter e aceitar
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//Isso é como se eu "instalasse" um plugin. Aqui eu estou introduzindo o paginate do mongoose
ProductSchema.plugin(mongoosePaginate);

//Eu preciso fazer isso para dizer ao banco que temos um model de nome 'Product' e quem é ele 
mongoose.model('Product', ProductSchema);