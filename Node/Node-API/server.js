//importando bibliotecas/frames/microserviços...
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Com esse método eu permito enviar informações no formato JSON para a base!
app.use(express.json());

//Com o CORS eu permito acesso de outros dominíos, não só do localhost ou insonmia
app.use(cors());
//Conectando com o mongo
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true}
);

//Temos que exigir que todos os models esteja registrados!
requireDir('./src/models');

//As rotas agora tem lugar próprio './src/routes.js'
//No lugar da minha rota, eu coloco o "use()" que recebe todo tipo de requisição e manda para o arquivo das rotas.
app.use('/api', require('./src/routes'));
app.listen(3001);