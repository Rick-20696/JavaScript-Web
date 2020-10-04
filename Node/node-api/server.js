//Estou importando o express usando o require() que retorna uma função de importação de uma requisição node 
const express = require('express');
const app = express();
app.listen(3001);

//Definindo a primeira rota
//Toda vez que o usuário acessar essa rota ('/' indica que é a rota principal: 'localhost:porta') será executado a função
app.get('/', (request, response) => {
    response.send('Eae ');
});
