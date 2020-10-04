//importando bibliotecas/frames/microserviços...
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Conectando com o mongo
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true}
);

//Temos que exigir que o model esteja registrado!
requireDir('./src/models');

//Fazendo o primeiro teste com
const Product = mongoose.model('Product');

//Fazendo a primeira rota
app.get('/', (request, response) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native',
    });

    return response.send('Eae garai');
});

app.listen(3001);