const express = require('express');
const app = express();
app.listen(3001);

//Fazendo a primeira rota
app.get('/', (request, response) => {
    response.send('Eae men');
});